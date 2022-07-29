# Setup iOS

- [Prerequisites](#prerequisites)
- [Ruby](#ruby)
    - [Install required gems](#install-required-gems)
- [Cocoapods](#cocoapods)

## Prerequisites

- We will need the latest stable [Xcode](https://apps.apple.com/app/xcode/id497799835?mt=12) from the App Store
- Install the Xcode CLI toolchain. This includes the necessary Obj-C/C++ build toolchain (clang, make).

```shell
$ `sudo xcode-select --install`
```

## Ruby

We will need to have Ruby and some Rubygems installed.

Don't use the bundled BSD version of Ruby that comes out of the box on macOS. Install it with [asdf](https://asdf-vm.com/guide/getting-started.html)

### Install required gems

We use Bundler to install gems, so you only need to install `bundler` on your system.

Run the following from project root:

```shell
$ gem install bundler
$ bundle
```

## Cocoapods

iOS's dependencies use the Cocoapods system. Dependencies for React Native which we install via NPM _and_ require native functionality will be added to the `ios/Podfile` (Cocoapods' manifest file).

Cocoapods should be installed if we ran `bundle` in project repo. Please make sure to always use the Cocoapods version from bundler:

```shell
$ bundle exec pod install --project-directory=./ios
```

And not your own locally installed one from something like brew:

```shell
# DON'T DO THIS
$ pod install --project-directory=./ios
```
