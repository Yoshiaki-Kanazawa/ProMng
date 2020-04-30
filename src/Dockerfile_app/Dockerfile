FROM python:3.7.6-alpine

ADD requirements.txt /
RUN apk add --no-cache build-base mariadb-connector-c-dev \
 && pip install -r requirements.txt \
 && mkdir /proMng
COPY ./proMng /proMng
WORKDIR /proMng