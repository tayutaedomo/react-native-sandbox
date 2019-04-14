package com.reactnativesandbox;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

import static android.content.ContentValues.TAG;

public class HelloWorld extends ReactContextBaseJavaModule {
    public HelloWorld(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelloWorld";
    }

    @ReactMethod
    public void say() {
        Log.d(TAG, "HelloWorld");

        if (getCurrentActivity() != null) {
            Toast.makeText(getCurrentActivity(), "HelloWorld", Toast.LENGTH_SHORT).show();
        }
    }
}
