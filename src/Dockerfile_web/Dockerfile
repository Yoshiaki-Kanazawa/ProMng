FROM node:14.5.0-stretch

RUN npm install -g @angular/cli \
 && ng config -g cli.packageManager yarn \
 && yarn global add @angular/core \
 && yarn global add @angular/cdk \
 && yarn global add hammerjs \
 && yarn global add @angular/common \
 && yarn global add @angular/animations \
 && yarn global add @angular/forms \
 && yarn global add @angular/platform-browser \
 && yarn global add @angular/material \
 && yarn global add @angular/material-moment-adapter \
 && mkdir promngfr
COPY ./promngfr /promngfr
WORKDIR /promngfr