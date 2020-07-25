FROM node:13.2.0-stretch

RUN npm install -g @angular/cli \
 && ng config -g cli.packageManager yarn \
 && npm install --save-dev @angular-devkit/build-angular \
 && npm install --save @angular/material \
 && yarn add @angular/material-moment-adapter \
 && mkdir promngfr
COPY ./promngfr /promngfr
WORKDIR /promngfr