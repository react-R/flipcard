library(shiny)
library(flipcard)

ui <- fluidPage(
  tags$script(HTML(
"
// set up global state observable that we can reference with flipcardInput
state = mobx.observable({isFlipped: true});

// set up a Shiny message handler so we can change the state from R
Shiny.addCustomMessageHandler('flip', function(message) {
    state.isFlipped = !state.isFlipped;
});

// set up a click handler to flip in JavaScript
function handleClick(){ state.isFlipped = !state.isFlipped }
"
  )),
  titlePanel("reactR Input Example"),
  wellPanel(style = "width: 400px;", "Now we have three mechanisms to flip.  We can click on the image or on any of the buttons."),
  tags$button("JavaScript Flip Button", onclick="handleClick()"),
  actionButton("btnflip", "Shiny Flip Button"),
  flipcardInput(
    "flipInput",
    default = "state",
    configuration = list(
      containerStyle = list(width = "400px", height = "400px"),
      front = list(
        tag = "img",
        props = list(
          src = "//static.pexels.com/photos/59523/pexels-photo-59523.jpeg",
          style = list(height = "100%", width = "100%")
        ),
        content = NULL
      ),
      back = list(
        tag = "img",
        props = list(
          src = "//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto",
          style = list(height = "100%", width = "100%")
        ),
        content = NULL
      )
    )
  )
)

server <- function(input, output, session) {
  observeEvent(input$btnflip, {
    session$sendCustomMessage("flip", list())
  })
}

shinyApp(ui, server)
