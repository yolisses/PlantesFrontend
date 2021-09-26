package com.plantei;

import com.reactnativenavigation.NavigationActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import com.rngrp.RNGRPPackage;  // <--- import

public class MainActivity extends NavigationActivity {
  // Suspeito
  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegate(this, getMainComponentName()) {
  //     @Override
  //     protected ReactRootView createRootView() {
  //      return new RNGestureHandlerEnabledRootView(MainActivity.this);
  //     }
  //   };
  // }
}
