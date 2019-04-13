//
//  HelloWorld.swift
//  ReactNativeSandbox
//
//  Created by tayutaedomo on 2019/04/13.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit

@objc(HelloWorld)
class HelloWorld : NSObject {
  @objc(say)
  func say() {
    print("HelloWorld")
    let alert: UIAlertController = UIAlertController(title: "Alert", message: "message", preferredStyle: UIAlertController.Style.alert)
    alert.addAction(UIAlertAction(title: "close", style: .cancel))
    if let appDelegate = UIApplication.shared.delegate as? AppDelegate {
      appDelegate.window.rootViewController?.present(alert, animated: true, completion: nil)
    }
  }
}
