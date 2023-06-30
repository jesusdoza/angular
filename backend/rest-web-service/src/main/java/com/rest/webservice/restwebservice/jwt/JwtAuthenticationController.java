
package com.rest.webservice.restwebservice.jwt;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


//{
//    "token": "eyJraWQiOiI5NTY5ZDc0Yy01MDVlLTQ1YzEtOGQ1OC05ZTEzMjUwM2RhOTQiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYm9iIiwiZXhwIjoxNjg4MTM4MjYwLCJpYXQiOjE2ODgxMzI4NjAsInNjb3BlIjoiUk9MRV9VU0VSIHJlYWQifQ.LUthpdKn3ovpjbFIW34IrhvvxLH43kQH9WNFFNjAaQrYJ6N3KvRsUw3HacDEHbwJB98z-eow-j_OqkM5PviooTmeYJmzdEavMvFyyaHVzA6JVxNnmdGG9ah3YNJqt_BkpxMcn2BY1BzKdZJD5dWsc3tqSvHupe3PKsLXHKcdZz4JaOAfnoBU0Tdh_SzTxfv43yAl-b5IkvSndUoDs4miCHlgrdB5GZkOOM3HFaML9Hm5b19wK5aGP7JMAJeHATAbYj4yA2L-7NqDByaVh4ROe2DIQdZaHCKTvXHn7ZEsjk96xvRhFeHY8-6c5W_CknYh680CLq0RLIIOfn3iHgKlGg"
//}
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JwtAuthenticationController {

  private final JwtTokenService tokenService;

  private final AuthenticationManager authenticationManager;

  public JwtAuthenticationController(JwtTokenService tokenService,
                                     AuthenticationManager authenticationManager) {
    this.tokenService = tokenService;
    this.authenticationManager = authenticationManager;
  }

  @PostMapping("/authenticate")
  public ResponseEntity<JwtTokenResponse> generateToken(
    @RequestBody JwtTokenRequest jwtTokenRequest) {

    var authenticationToken =
      new UsernamePasswordAuthenticationToken(
        jwtTokenRequest.username(),
        jwtTokenRequest.password());

    var authentication =
      authenticationManager.authenticate(authenticationToken);

    var token = tokenService.generateToken(authentication);

    return ResponseEntity.ok(new JwtTokenResponse(token));
  }
}

