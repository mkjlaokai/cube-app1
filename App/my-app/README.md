### Welcome to Cube!

嗨！你好，这是一个使用 [Cube](http://cube.intra.knownsec.com/) 创建的项目。

> ⚠ 注意：如果这个项目不是使用命令生成的（如：从 Git 上 Clone 下来的），那么一定要记得在根目录下先执行 `yarn setup` 呦！

#### 基础命令

在当前目录中，有以下命令可供执行：

* `yarn build`

    统一编译前后端工程，并将编译后的前端文件放置到后端工程的 `build` 目录内。此时，在后端工程内直接执行 `yarn start` 即可访问，而无需再单独启动前端工程。

* `yarn lint`

    统一对前后端工程进行代码检查，暴露出不规范的编码风格及其他潜在风险。

* `yarn test`

    统一对执行前后端工程的所有测试用例。

#### GIT HOOK

在当前目录的 `package.json` 里，使用 `husky` 配置了相应的 GIT HOOK：

* `pre-commit`

    在 Commit 之前会先使用 `Prettier` 进行代码格式化，并执行 `yarn lint` 进行代码检查。

* `pre-push`

    在  Push 代码之前，会对项目整体进行测试，测试用例全部通过才会 Push 成功。

*  `commit-msg`

    在 Commit 之前，会检验 Commit Msg 的规范性，当前规则为 `validate-commit-msg` 中的[默认配置](https://github.com/kentcdodds/validate-commit-msg#options)。

#### 前端工程

前端工程位于 `ui` 目录下，请参阅[对应的 README](ui/README.md) 以了解更多信息。

#### 后端工程

后端工程位于 `server` 目录下，请参阅[对应的 README](server/README.md) 以了解更多信息。

#### 了解更多

如果你还没有使用 Cube 进行开发的经验，建议你先阅读完整的 [Cube 使用文档](http://cube.intra.knownsec.com/cube-docs/)。
