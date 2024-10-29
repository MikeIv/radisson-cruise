// docker run --rm -v $PWD/cypress:/e2e -w /e2e -e CYPRESS_BASE_URL=https://www.radisson-cruise.ru -e CYPRESS_API_URL=https://www.radisson-cruise.ru cypress/included -b chrome

describe('radisson', () => {
  function reloadPageUntilStackIsReady(maxAttempts=5, attempts=0) {
    if (attempts > maxAttempts) {
      throw new Error("Timed out waiting for docker swarm is ready")
    }
    cy.get("h1").then($header => {
      if ($header.text() == "Swarm Ingress Fallback") {
        cy.wait(2000).reload(true)
        reloadPageUntilStackIsReady(maxAttempts, attempts+1)
      }
    })
  }
  before(() => {
    cy.task("log", Cypress.env())
    cy.viewport(1440, 1500)
      .visit("/")
    reloadPageUntilStackIsReady()
  })
  it("Ticket purchase", () => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env("API_URL") + '/api/v1/routes**',
    }).as('scheduleRequest');
    cy.intercept({
      method: 'GET',
      url: Cypress.env("API_URL") + '/api/v1/route?journey=**',
    }).as('routeRequest');
    cy.intercept({
      method: 'POST',
      url: Cypress.env("API_URL") + '/api/v1/order**',
    }).as('orderRequest');

    cy.get("a.header-link-shedule").click()
      .wait('@scheduleRequest')
      .its('response.statusCode').should('equal', 200)
      .get("a.button_ticket:not(.disabled-link):eq(20)").click()
      .wait('@routeRequest')
      .its('response.statusCode').should('equal', 200)
      .get("input[type=text].buy-ticket__input").filter(':visible').type("Ivan Ivanov")
      .get("input[type=tel].buy-ticket__input").filter(':visible').type("+79009009090")
      .get("input[type=email].buy-ticket__input").filter(':visible').type("test@radisson-cruise.ru")
      .get("input[type=checkbox][name=check-personal]").check()
      .get("button[type=submit].button_ticket:not(.disabled-link)").click()
      .wait('@orderRequest')
      .its('response.body.formUrl').then(res => cy.task("log", "Payment URL: " + res))
      .wait(5000)
  
    cy.screenshot('result', {capture: 'viewport'})
  })
})
