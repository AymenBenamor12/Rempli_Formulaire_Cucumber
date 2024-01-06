package com.e2eTests.automation.pageObjects;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.utils.CommondMethods;
import com.e2eTests.automation.utils.Setup;

public class FormulairePageObejects extends CommondMethods  {

/*Locators*/
	
	final static String FIRSTNAME_ID = "firstName";
	final static String LASTTNAME_ID = "lastName";
	final static String EMAILTNAME_ID = "userEmail";
	final static String GENDER_ID = "gender-radio-1";
	final static String NUMBER_ID = "userNumber";
	final static String ADDRESS_ID = "currentAddress";
	final static String SUBMIT_ID = "submit";
    final static String MESSAGE_XPATH ="//div[text()='Thanks for submitting the form']";
	final static String CLOSEBTN_ID ="closeLargeModal";
	
	/*@FindBy*/
	@FindBy(how= How.ID, using=FIRSTNAME_ID)
	public static WebElement firstName;
	
	@FindBy(how= How.ID, using=LASTTNAME_ID)
	public static WebElement lastName;
	
	@FindBy(how= How.ID, using=EMAILTNAME_ID)
	public static WebElement email;
	
	@FindBy(how= How.ID, using=GENDER_ID)
	public static WebElement genderr;
	
	@FindBy(how= How.ID, using=NUMBER_ID)
	public static WebElement number;
	
	@FindBy(how= How.ID, using=ADDRESS_ID)
	public static WebElement adress;
	
	@FindBy(how= How.ID, using=SUBMIT_ID)
	public static WebElement submit;
	
	@FindBy(how = How.XPATH, using= MESSAGE_XPATH)
	public static WebElement confirmationMessage;
	
	@FindBy(how = How.ID, using= CLOSEBTN_ID)
	public static WebElement closeBtn;
	
	
	/*Methods*/
	public static void firstNameMethode(String name) {
		firstName.sendKeys(name);
}
	public static void lastNameMethode(String namelast) {
		lastName.sendKeys(namelast);
}
	public static void emailMethode(String mail) {
		email.sendKeys(mail);
}
	public static void numberMethode(String numero) {
		number.sendKeys(numero);
}
	public static void adressMethode(String cureentadress) {
		adress.sendKeys(cureentadress);
}
	public static void genderMethode() {
		 JavascriptExecutor js = (JavascriptExecutor) driver;
         js.executeScript("arguments[0].click();", genderr);
}
	public static void sumbitMethode() {
		 JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", submit);
}
	public static void messageMethode() {
		 if (confirmationMessage.isDisplayed()) {
             // if the message is displayed , write PASS in the excel sheet
             System.out.println("PASS");
             
         } else {
             //if the message is not displayed , write FAIL in the excel sheet
        	 System.out.println("FAIL");
         }
	}
	public static void closeMethode() {
		 JavascriptExecutor js = (JavascriptExecutor) driver;
       js.executeScript("arguments[0].click();", closeBtn);
}
	
	
public static void scrennshot( String screenShot1) {
		
		TakesScreenshot screenshot= (TakesScreenshot) driver;
    File screenshotFile = screenshot.getScreenshotAs(OutputType.FILE);

    //String destinationPath = "C:\\Users\\AYMEN\\Desktop\\excelProjet.screenshot.png";

    File destinationFile = new File("C:\\Users\\AYMEN\\Desktop\\screen shot\\"+screenShot1+".png");
    
    		try {
        FileUtils.copyFile(screenshotFile, destinationFile);
        System.out.println("Capture d'écran effectuée avec succès. Chemin du fichier : " + destinationFile.getAbsolutePath());
    } catch (IOException e) {
        System.out.println("Erreur lors de l'enregistrement du screenshot : " + e.getMessage());
    }
}
	public static  void ecriremessage(String done) {
		System.out.println("Le Scenario est "+done);
	}
}
