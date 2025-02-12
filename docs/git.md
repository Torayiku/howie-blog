1. 全局代理设置
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
这里可以打开SS查看代理设置，查看自己的端口是否为1080，不是的改为对应的端口。

2. 只对GitHub进行代理
如果挂了全局代理，克隆coding之类的国内仓库会变慢，所以我建议使用如下命令，只对GitHub进行代理，对国内的仓库不影响。

git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

要注意本机的代理地址，clash是http://127.0.0.1:7890，有的是https。

3. 取消代理设置
git config --global --unset http.proxy
git config --global --unset https.proxy

4. 查看git设置
git config --global -l


5. 上传代码流程
git branch -M main
git add .
git commit -m "init project"
# 关联远程仓库 git@github.com:userName/repositoryName.git 这里是你自己的仓库地址
git remote add origin git@github.com:userName/repositoryName.git
git push -u origin main