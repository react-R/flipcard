#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
flipcardInput <- function(
  inputId,
  default = "",
  configuration = list()
) {
  reactR::createReactShinyInput(
    inputId,
    "flipcard",
    list(
      reactR::html_dependency_mobx(),
      htmltools::htmlDependency(
        name = "flipcard-input",
        version = "1.0.0",
        src = "www/flipcard/flipcard",
        package = "flipcard",
        script = "flipcard.js"
      )
    ),
    default,
    configuration,
    htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateFlipcardInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
