FROM node:13.2.0-stretch

RUN npm install -g @angular/cli \
 && ng config -g cli.packageManager yarn \
 && npm install --save-dev @angular-devkit/build-angular \
 && mkdir promngfr
COPY ./promngfr /promngfr
WORKDIR /promngfr