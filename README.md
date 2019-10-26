# ProMng
[開発を始める前に行うこと]
pyenvのインストール。pyenvをインストールすることでpythonのバージョンの切り替えが容易にできるようになる。
$ brew install pyenv

pyenvコマンドを利用するためにpyenvにPATHを通す。
$ echo 'export PATH="$HOME/.pyenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bash_profile
$ source ~/.bash_profile

下記のコマンドでPythonをインストールする。
$ pyenv install 3.7.4

下記のコマンドでpipをインストールする。Djangoのインストールに必要なため。
$ brew install pip

pipのversionを確認する。(一応どちらも確認)
$ pip --version
$ pip3 --version
pipのPATHがpython3系のディレクトリになってればOK

pythonの仮想環境を起動（既に金澤が作成済み）。これでプロジェクトごとにpipのパッケージを管理できる。
$ source ProMngVenv/bin/activate

Djangoのインストール
$ pip install Django==2.2.6

Djangoがインストールできたか確信する。
$ python3 -m django --version

[プロジェクトのディレクトリ構成]
ProMng              ->  作業ディレクトリ（gitのローカルリポジトリ）
  |-proMng          ->  プロジェクトディレクトリ
      |-management  ->  プロジェクトに所属するアプリケーションのディレクトリ（アプリケーションは複数作成可能）。
                        今回は基本的にこのディレクトリで作業を行う。
      |-proMng      ->  プロジェクト全体の設定ファイル等が入ったディレクトリ。
  |-ProMngVenv      ->  仮想環境の設定が入ってるディレクトリ（絶対に触らないこと）