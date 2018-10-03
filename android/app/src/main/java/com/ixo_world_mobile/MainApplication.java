package com.ixo_world_mobile;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.horcrux.svg.SvgPackage;
import com.tradle.react.UdpSocketsModule;
import com.peel.react.TcpSocketsModule;
import com.bitgo.randombytes.RandomBytesPackage;
import com.peel.react.rnos.RNOSModule;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.horcrux.svg.SvgPackage;
import org.reactnative.camera.RNCameraPackage;
import com.imagepicker.ImagePickerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeFingerprintScannerPackage(),
            new RNSensitiveInfoPackage(),
            new LinearGradientPackage(),
            new SvgPackage(),
            new UdpSocketsModule(),
            new TcpSocketsModule(),
            new RandomBytesPackage(),
            new RNOSModule(),
            new RNCameraPackage(),
            new ImagePickerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
