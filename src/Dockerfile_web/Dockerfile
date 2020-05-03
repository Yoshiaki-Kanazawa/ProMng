FROM node:13.2.0-stretch

RUN npm install -g @angular/cli \
 && ng config -g cli.packageManager yarn \
 && mkdir promngfr
COPY ./promngfr /promngfr
WORKDIR /promngfr