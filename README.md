# v-cli
   vCLI工具
# 安装
   ```
   npm link
   ```
#使用
   ```
   vcli init [tpl] [project]
   tpl: 【模板名称】
   project: 文件夹名称

   可单独执行（模板可选择）：vcli init
   ```
#注
    私有库地址当前写在 src/npm.js 中,可自行修改
    
	vcli可执行npm的命令选项，优先访问私有库，再查找公有库，如：vcli install jquery

【模板名称】，当前有两种模板：
```
php/webpack ： 
static/webpack ： 
```
