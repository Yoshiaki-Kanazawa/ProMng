FROM node:14.5.0-stretch

RUN npm install -g @angular/cli \
 && ng config -g cli.packageManager yarn \
 && npm install --save-dev @angular-devkit/build-angular \
 && npm install --save @angular/material \
 && npm install @angular/material-moment-adapter \
 && mkdir promngfr
COPY ./promngfr /promngfr
WORKDIR /promngfr