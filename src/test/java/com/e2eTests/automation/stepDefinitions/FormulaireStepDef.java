package com.e2eTests.automation.stepDefinitions;

import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.pageObjects.FormulairePageObejects;
import com.e2eTests.automation.utils.CommondMethods;
import com.e2eTests.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FormulaireStepDef extends CommondMethods{

	private  FormulairePageObejects formulairePageObejects = new FormulairePageObejects();
	private CommondMethods commonMethods = new CommondMethods();
	public FormulaireStepDef()  {
		driver = Setup.driver;
		PageFactory.initElements(driver, FormulairePageObejects.class);
	}

@Given("^je me connecte sur l'application  demo$")
public void je_me_connecte_sur_l_application_demo() throws Throwable {
	commonMethods.openURLWithConfigFile("url1");
}

@When("^je remplir le champ firstname  \"([^\"]*)\"$")
public void je_remplir_le_champ_firstname(String firstname ) throws Throwable {
	formulairePageObejects.firstNameMethode(firstname );
}

@When("^je remplir le champ lastname  \"([^\"]*)\"$")
public void je_remplir_le_champ_lastname(String lastname) throws Throwable {
	formulairePageObejects.lastNameMethode(lastname);
}

@When("^je remplir le champ useremail  \"([^\"]*)\"$")
public void je_remplir_le_champ_useremail(String useremail  ) throws Throwable {
	formulairePageObejects.emailMethode(useremail);
}

@When("^je click sur le radio gender$")
public void je_click_sur_le_radio_gender() throws Throwable {
	formulairePageObejects.genderMethode();
}

@When("^je remplir le champ numero  \"([^\"]*)\"$")
public void je_remplir_le_champ_numero(String numero) throws Throwable {
	formulairePageObejects.numberMethode(numero);
}

@When("^je remplir le champ currentAdress  \"([^\"]*)\"$")
public void je_remplir_le_champ_currentAdress(String currentAdress) throws Throwable {
	formulairePageObejects.adressMethode(currentAdress);
}

@When("^faire une screenshotuser \"([^\"]*)\"$")
public void faire_une_screenshotuser(String screenshot) throws Throwable {
	formulairePageObejects.scrennshot(screenshot);
}

@When("^je click  sur le bouton submit$")
public void je_click_sur_le_bouton_submit() throws Throwable {
	formulairePageObejects.sumbitMethode();
}

@Then("^je obtient un message de confirmation$")
public void je_obtient_un_message_de_confirmation() throws Throwable {
	formulairePageObejects.messageMethode();
	formulairePageObejects.closeMethode();
}



}
