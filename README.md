# 起動方法

## 1. docker-compose起動

```bash
$ docker-compose up -d
```

## 2. テーブル作成（初回のみ実行）

```bash
$ docker exec -it promng_app_1 ash
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