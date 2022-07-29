# Setup Android

- [Prerequisites](#prerequisites)
- [Install a Java runtime](#install-a-java-runtime)
- [Exposing Android SDKs](#exposing-android-sdks)
- [Setup emulator for developing](#setup-emulator-for-developing)

## Prerequisites

- We will need [Android Studio](https://developer.android.com/studio/index.html)
- Follow the guidelines here to setup Android Studio: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
    - Use the correct images for your CPU architecture (x64/arm) and install all Platform SDKs required for the project.

## Install a Java runtime

The java runtime is specific via asdf. Install it with [asdf](https://asdf-vm.com/guide/getting-started.html)

Additional configuration is required to make java globally known to the system:

```shell
# Add the following line to your shell profile (e.g .zshrc or .oh-my-zsh/custom/sources.zsh)
source "$HOME/.asdf/plugins/java/set-java-home.zsh"

# Add the following to ~/.asdfrc to automatically set the $JAVA_HOME env var
java_macos_integration_enable = yes
```

Afterwards and optionally, in Android Studio click the **"Sync project with Gradle files"** button.

## Exposing Android SDKs

React Native, build-time toolchains and CI systems will need to know where to find the relevant Android SDKs.
Locally, you must make `ANDROID_HOME` known to your shell and add the sdk CLI tools to your `PATH`.
`JAVA_HOME` should be automatically exported by asdf via the `~/.asdfrc` file, otherwise export it as well here.

Expose the following env vars to your shell via its configuration file (`.zshrc`, `.bashrc`, `.bash_profile`, ...):

```shell
export ANDROID_HOME="$HOME/Library/Android/sdk"

# Take note of the correct jdk version here. It should be the one you installed earlier
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/tools/bin"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
```

## Setup emulator for developing

Two options to install an emulator:

- [Terminal](https://developer.android.com/studio/command-line/avdmanager.html)

```shell
$ sdkmanager --install emulator
$ sdkmanager "system-images;android-29;google_apis;x86"
$ sdkmanager --licenses
$ avdmanager create avd --name Pixel_3_API_29 --package "system-images;android-29;google_apis;x86" --device Pixel
```

- [Android Studio](https://developer.android.com/studio/run/managing-avds)
