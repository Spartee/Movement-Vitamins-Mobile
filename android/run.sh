#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n edu.haverford.MovementVitamins/host.exp.exponent.MainActivity
