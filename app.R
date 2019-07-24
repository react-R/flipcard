library(shiny)
library(flipcard)

ui <- fluidPage(
  titlePanel("reactR Input Example"),
  wellPanel(style = "width:400px;", "Quick Example demonstrating flipping in Shiny."),
  actionButton("btnflip", "Flip card"),
  flipcardInput(
    "flipInput",
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

  # reactive value for flipped state
  isFlipped <- reactiveVal(FALSE)

  observeEvent(input$btnflip, {
    # toggle flipped
    isFlipped(!isFlipped())

    # send update to flipcard
    flipcard::updateFlipcardInput(
      session = session,
      inputId = "flipInput",
      value = NULL,
      configuration = list(
        containerStyle = list(width = "400px", height = "400px"),
        isFlipped = isFlipped(),
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
  })

}

shinyApp(ui, server)
