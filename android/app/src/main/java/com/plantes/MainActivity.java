package com.plantes; // change package name // mudei

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // add this
import android.os.Bundle; // add this

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import com.rngrp.RNGRPPackage;  // <--- import

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Plantes";
  }

  @Override                                             // add this
  protected void onCreate(Bundle savedInstanceState) {  // add this
    SplashScreen.show(this);                            // add this
    super.onCreate(savedInstanceState);                 // add this
  }                                                     // add this

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
