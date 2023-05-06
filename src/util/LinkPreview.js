export default function generateLinkPreviewHTML(title) {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <div class="templateContainer">
                <div class="contentContainer">
                    <h1>${title}</h1>
                    <div class="spacer"></div>
                    <p><span class="highlight">linkandreas.de</span> - Articles about iOS development</p>
                </div>
            </div>
        </body>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
        
            .spacer {
                flex: 1;
            }
        
            .templateContainer {
                display: flex;
                flex-flow: column nowrap;
                height: 100vh;
                align-items: start;
            }
        
            .contentContainer {
                display: flex;
                flex-flow: column nowrap;
                align-items: left;
                justify-content: start;
                padding-top: 10%; 
                padding-left: 5%;
                padding-right: 5%;
                padding-bottom: 10%;
                height: 100%;
                color: #e0e2e4;
                background-color: #040406;
            }
        
            .contentContainer p {
                font-size: 33pt;
            }
        
            .templateContainer h1 {
                font-size: 50pt;
            }
        
            .highlight {
                color: #f77f00;
            }
        
            .captionContainer {
                display: flex;
                flex-flow: row nowrap;
            }
        
            .infoTitle {
                font-size: 32pt;
            }
        </style>
    </html>`
};