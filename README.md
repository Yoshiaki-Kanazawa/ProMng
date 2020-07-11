# 起動方法

## 0. imageの更新

ソースコードを更新した場合、以下の作業を行う。(例としてweb領域の手順を記載)

```bash
$ cd ./src/Dockerfile_web
$ docker build -t promng_web:latest .
```

## 1. docker-compose起動

```bash
$ docker-compose up -d
$ docker-compose restart app
```

## 2. テーブル作成（初回のみ実行）

```bash
$ docker exec -it app-container ash
/proMng $ python manage.py makemigrations
/proMng $ python manage.py migrate
/proMng $ python manage.py createsuperuser
# いろいろ入力を求められるので適当に入力
/proMng $ exit
```

http://0.0.0.0:30000/admin にアクセスし、先ほど入力したuser/passwordでログイン。  
テストデータを入力して保存。

## 3. Webサイトにアクセス

http://0.0.0.0:4200 にアクセス

## 4. docker-compose停止＆コンテナ削除

```bash
$ docker-compose down
```