$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Formulaire/Fromulaire.feature");
formatter.feature({
  "line": 1,
  "name": "Remplir le formulaire ans le site demo",
  "description": "I want to use this template for my feature file",
  "id": "remplir-le-formulaire-ans-le-site-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Remplir le formulaire ans le site demo",
  "description": "",
  "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Formulaire"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "je me connecte sur l\u0027application  demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je remplir le champ firstname  \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je remplir le champ lastname  \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je remplir le champ useremail  \"\u003cuseremail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je click sur le radio gender",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je remplir le champ numero  \"\u003cnumero\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je remplir le champ currentAdress  \"\u003ccurrentAdress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "faire une screenshotuser \"\u003cscreenshot\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "je click  sur le bouton submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je obtient un message de confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "useremail",
        "numero",
        "currentAdress",
        "screenshot"
      ],
      "line": 18,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;1"
    },
    {
      "cells": [
        "aymen1",
        "Amor1",
        "aymen.benamor@enis.tn",
        "23412279",
        "soussa",
        "screenshot1"
      ],
      "line": 19,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;2"
    },
    {
      "cells": [
        "aymen2",
        "amor2",
        "aymen.benamor1@enis.tn",
        "23415279",
        "soussa",
        "screenshot2"
      ],
      "line": 20,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;3"
    },
    {
      "cells": [
        "aymen3",
        "Amor3",
        "aymen.benamor2@enis.tn",
        "24356872",
        "soussa",
        "screenshot3"
      ],
      "line": 21,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;4"
    },
    {
      "cells": [
        "aymen4",
        "amor4",
        "aymen.benamor3@enis.tn",
        "23418279",
        "soussa",
        "screenshot4"
      ],
      "line": 22,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;5"
    },
    {
      "cells": [
        "aymen5",
        "Amor5",
        "aymen.benamor4@enis.tn",
        "23419279",
        "soussa",
        "screenshot5"
      ],
      "line": 23,
      "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3495676699,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Remplir le formulaire ans le site demo",
  "description": "",
  "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Formulaire"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "je me connecte sur l\u0027application  demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je remplir le champ firstname  \"aymen1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je remplir le champ lastname  \"Amor1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je remplir le champ useremail  \"aymen.benamor@enis.tn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je click sur le radio gender",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je remplir le champ numero  \"23412279\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je remplir le champ currentAdress  \"soussa\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "faire une screenshotuser \"screenshot1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "je click  sur le bouton submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je obtient un message de confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "FormulaireStepDef.je_me_connecte_sur_l_application_demo()"
});
formatter.result({
  "duration": 2544040700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen1",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_firstname(String)"
});
formatter.result({
  "duration": 456408900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amor1",
      "offset": 31
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_lastname(String)"
});
formatter.result({
  "duration": 116359801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen.benamor@enis.tn",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_useremail(String)"
});
formatter.result({
  "duration": 128720101,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_click_sur_le_radio_gender()"
});
formatter.result({
  "duration": 48544099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23412279",
      "offset": 29
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_numero(String)"
});
formatter.result({
  "duration": 86605699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soussa",
      "offset": 36
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_currentAdress(String)"
});
formatter.result({
  "duration": 94457199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "screenshot1",
      "offset": 26
    }
  ],
  "location": "FormulaireStepDef.faire_une_screenshotuser(String)"
});
formatter.result({
  "duration": 369755300,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_click_sur_le_bouton_submit()"
});
formatter.result({
  "duration": 62220900,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_obtient_un_message_de_confirmation()"
});
formatter.result({
  "duration": 10060281300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027Thanks for submitting the form\u0027]\"}\n  (Session info: chrome\u003d120.0.6099.130)\n  (Driver info: chromedriver\u003d120.0.6099.109 (3419140ab665596f21b385ce136419fde0924272-refs/branch-heads/6099@{#1483}),platform\u003dWindows NT 10.0.22621 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027AYMEN_BENAMOR\u0027, ip: \u002710.192.162.191\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65057}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d120.0.6099.109 (3419140ab665596f21b385ce136419fde0924272-refs/branch-heads/6099@{#1483}), userDataDir\u003dC:\\Users\\AYMEN\\AppData\\Local\\Temp\\scoped_dir27936_1419558954}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d120.0.6099.130, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: d703b0a8516860345c2e4b35ddadb896\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027Thanks for submitting the form\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.e2eTests.automation.pageObjects.FormulairePageObejects.messageMethode(FormulairePageObejects.java:87)\r\n\tat com.e2eTests.automation.stepDefinitions.FormulaireStepDef.je_obtient_un_message_de_confirmation(FormulaireStepDef.java:69)\r\n\tat ✽.Then je obtient un message de confirmation(Formulaire/Fromulaire.feature:15)\r\n",
  "status": "failed"
});
formatter.write("Current page URL is https://demoqa.com/automation-practice-form");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1910266700,
  "status": "passed"
});
formatter.before({
  "duration": 2098998301,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Remplir le formulaire ans le site demo",
  "description": "",
  "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Formulaire"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "je me connecte sur l\u0027application  demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je remplir le champ firstname  \"aymen2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je remplir le champ lastname  \"amor2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je remplir le champ useremail  \"aymen.benamor1@enis.tn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je click sur le radio gender",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je remplir le champ numero  \"23415279\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je remplir le champ currentAdress  \"soussa\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "faire une screenshotuser \"screenshot2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "je click  sur le bouton submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je obtient un message de confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "FormulaireStepDef.je_me_connecte_sur_l_application_demo()"
});
formatter.result({
  "duration": 1513893801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen2",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_firstname(String)"
});
formatter.result({
  "duration": 491304101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amor2",
      "offset": 31
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_lastname(String)"
});
formatter.result({
  "duration": 184331501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen.benamor1@enis.tn",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_useremail(String)"
});
formatter.result({
  "duration": 218701500,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_click_sur_le_radio_gender()"
});
formatter.result({
  "duration": 51525501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23415279",
      "offset": 29
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_numero(String)"
});
formatter.result({
  "duration": 133478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soussa",
      "offset": 36
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_currentAdress(String)"
});
formatter.result({
  "duration": 137744701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "screenshot2",
      "offset": 26
    }
  ],
  "location": "FormulaireStepDef.faire_une_screenshotuser(String)"
});
formatter.result({
  "duration": 413225801,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_click_sur_le_bouton_submit()"
});
formatter.result({
  "duration": 107917999,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_obtient_un_message_de_confirmation()"
});
formatter.result({
  "duration": 10097394700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027Thanks for submitting the form\u0027]\"}\n  (Session info: chrome\u003d120.0.6099.130)\n  (Driver info: chromedriver\u003d120.0.6099.109 (3419140ab665596f21b385ce136419fde0924272-refs/branch-heads/6099@{#1483}),platform\u003dWindows NT 10.0.22621 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027AYMEN_BENAMOR\u0027, ip: \u002710.192.162.191\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65155}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d120.0.6099.109 (3419140ab665596f21b385ce136419fde0924272-refs/branch-heads/6099@{#1483}), userDataDir\u003dC:\\Users\\AYMEN\\AppData\\Local\\Temp\\scoped_dir14028_1790990498}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d120.0.6099.130, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 4d0475167757e019e38d851c6bc72957\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027Thanks for submitting the form\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.e2eTests.automation.pageObjects.FormulairePageObejects.messageMethode(FormulairePageObejects.java:87)\r\n\tat com.e2eTests.automation.stepDefinitions.FormulaireStepDef.je_obtient_un_message_de_confirmation(FormulaireStepDef.java:69)\r\n\tat ✽.Then je obtient un message de confirmation(Formulaire/Fromulaire.feature:15)\r\n",
  "status": "failed"
});
formatter.write("Current page URL is https://demoqa.com/automation-practice-form");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2395567700,
  "status": "passed"
});
formatter.before({
  "duration": 2227540900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Remplir le formulaire ans le site demo",
  "description": "",
  "id": "remplir-le-formulaire-ans-le-site-demo;remplir-le-formulaire-ans-le-site-demo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Formulaire"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "je me connecte sur l\u0027application  demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je remplir le champ firstname  \"aymen3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je remplir le champ lastname  \"Amor3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je remplir le champ useremail  \"aymen.benamor2@enis.tn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je click sur le radio gender",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je remplir le champ numero  \"24356872\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je remplir le champ currentAdress  \"soussa\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "faire une screenshotuser \"screenshot3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "je click  sur le bouton submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je obtient un message de confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "FormulaireStepDef.je_me_connecte_sur_l_application_demo()"
});
formatter.result({
  "duration": 201209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen3",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_firstname(String)"
});
formatter.result({
  "duration": 1323526699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amor3",
      "offset": 31
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_lastname(String)"
});
formatter.result({
  "duration": 825670300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aymen.benamor2@enis.tn",
      "offset": 32
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_useremail(String)"
});
formatter.result({
  "duration": 152981900,
  "status": "passed"
});
formatter.match({
  "location": "FormulaireStepDef.je_click_sur_le_radio_gender()"
});
formatter.result({
  "duration": 54486700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24356872",
      "offset": 29
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_numero(String)"
});
formatter.result({
  "duration": 105256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soussa",
      "offset": 36
    }
  ],
  "location": "FormulaireStepDef.je_remplir_le_champ_currentAdress(String)"
});
formatter.result({
  "duration": 109186101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "screenshot3",
      "offset": 26
    }
  ],
  "location": "FormulaireStepDef.faire_une_screenshotuser(String)"
});
