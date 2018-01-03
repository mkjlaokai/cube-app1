### Welcome to the Server Side of Cube

嗨！你好，这是一个使用 [Cube](http://cube.intra.knownsec.com) 创建的后端工程。

#### 基础命令

在当前目录中，有以下命令可供执行：

* `yarn lint`

    检查代码，暴露出不规范的编码风格及其他潜在风险。

* `yarn start`

    启动服务器，监听文件变更并自动重启。
  
**PS: 如果要启动调试模式，可以在命令后面加上调试参数：node 版本 `<7`，就使用`yarn start -- --debg`；如果 node 版本`>=7`，则使用`yarn start -- --inspect`。**

* `yarn test`

    执行测试用例，监听文件变更并自动重新执行。

#### 目录结构

* `config`

    该目录中的 `default.yml` 用于自定义工程及组件的配置。

*  `src`

    所有源码均应存放于此。

* `test`

    所有的测试用例均应存放于此。

#### 开发教程

详细的 Cube 后端开发教程参见 [Cube 使用文档](http://cube.intra.knownsec.com/cube-docs/)。


#### 常见问题

* `throw new Error('Configuration property "' + property + '" is not defined');`

  * 问题描述

        这种情况，通常会发生在 git clone 下来的项目中。
        在 create-cube-app 创建项目的时候，会在 `server/config/` 目录下创建一个 `default.yml` 文件。
        而由于各自环境配置的多样性、私密性，我们在 git 中默认忽略了 `default.yml` 这个文件，所以在 git 仓库中不会存在 `server/config/default.yml`。
        而这个文件在后端工程启动时又是必须的，所以才会发生以上错误，导致项目不能启动。

    * 解决方案

        将 `server/config/default.yml.example` 拷贝一份为 `server/config/default.yml`，检查新创建的 `default.yml` 文件内容，尤其是数据库连接等项目，修改然后保存。
