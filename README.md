# http-status-cli
Install globaly:
```
npm i -g http-status-cli
```
Usage:
```
> http-status l <code> -optional
> http-status lookup <code> -optional
> http-status <code> -optional
```
Optionals:
```
-s, -short | Short description
-p, -plain | Plain text without colors
```
Example:
```
> http-status 200
> http-status l 200
> http-status lookup 200
> http-status 200 
```
Output:
```
Found exact match:
200 » OK » "indicates that the request has succeeded."

OR

Found multiple matches:
400 » Bad Request » "indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."
401 » Unauthorized » "indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."
402 » Payment Required » *reserved*
403 » Forbidden » "indicates that the server understood the request but refuses to authorize it."
404 » Not Found » "indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists."
405 » Method Not Allowed » "indicates that the method specified in the request-line is known by the origin server but not supported by the target resource."
406 » Not Acceptable » "indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the serv
er is unwilling to supply a default representation."
407 » Proxy Authentication Required » "is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy."
408 » Request Timeout » "indicates that the server did not receive a complete request message within the time that it was prepared to wait."
409 » Conflict » "indicates that the request could not be completed due to a conflict with the current state of the resource."
410 » Gone » "indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."
411 » Length Required » "indicates that the server refuses to accept the request without a defined Content-Length."
412 » Precondition Failed » "indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server."
413 » Payload Too Large » "indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process."
414 » URI Too Long » "indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret."
415 » Unsupported Media Type » "indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."
an excessive request of small or overlapping ranges."
418 » I'm a teapot » "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot."
Found exact match:
400 » Bad Request » "indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."

```
