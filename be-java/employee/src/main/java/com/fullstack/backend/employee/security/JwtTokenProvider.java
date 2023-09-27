package com.fullstack.backend.employee.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Component
public class JwtTokenProvider {

    @Value("${jwt.jwt-secret}")
    private String jwtSecret;

    @Value("${jwt.jwt-expiration}")
    private long jwtExpirationDate;

    private static final String AUTHORITIES_KEY = "author";

    public String createToken(Authentication authentication) {
        String roles = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));

        Date currentDate = new Date();
        long now = currentDate.getTime();

        String token = Jwts.builder()
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .claim(AUTHORITIES_KEY, roles)
                .setExpiration(new Date(now + jwtExpirationDate))
                .signWith(key())
                .compact();

        return token;
    }

    private Key key() {
        return Keys.hmacShaKeyFor(
                Decoders.BASE64.decode(jwtSecret)
        );
    }

    private Claims getClaims(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims;
    }

    //    chỉ lấy username
    public String getUsernameFromToken(String token) {
        Claims claims = getClaims(token);

        return claims.getSubject();
    }

    //    lấy nguyên thằng Authentication
    public Authentication getAuthenticationFromToken(String token) {
        Claims claims = getClaims(token);
        String roles = claims.get(AUTHORITIES_KEY).toString();
        String[] rolesArr = roles.split(",");

//        List<String> rolesList = Arrays.stream(rolesArr).collect(Collectors.toList());
//        List<GrantedAuthority> authorities = rolesList.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());

        Stream<String> rolesStream = Arrays.stream(rolesArr);
        List<GrantedAuthority> authorities = rolesStream.map(SimpleGrantedAuthority::new).collect(Collectors.toList());

        UserDetails principal = User.builder()
                .username(claims.getSubject())
                .password("")
                .authorities(authorities)
                .build();

        return new UsernamePasswordAuthenticationToken(principal, "", authorities);

    }

    public boolean validToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

//                    .parse(token);

            return true;
        } catch (JwtException | IllegalArgumentException exception) {
            log.info("Invalid JWT token.");
            log.trace("Invalid JWT token trace. ", exception);
        }
        return false;
    }

}
