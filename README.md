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
