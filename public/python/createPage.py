import platform

os = platform.system()

if(os == "Linux"):
    adress = "../dashboard/file.html"
else:
    adress = "public/dashboard/file.html"

page = open(adress, "w")

#html
page.write("<!DOCTYPE html>\n")
page.write("<html lang=\"en\">\n")

#head
page.write("<head>\n")
page.write("<title>SafeCommerce | Servidor</title>\n")
page.write("<link rel=\"icon\" href=\"../assets/images/logo-icon.png\">\n")
page.write("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n")
page.write("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\">\n")
page.write("<link rel=\"stylesheet\" href=\"../css/main.css\">\n")
page.write("</head>\n")
#fim head

#body
page.write("<body onresize=\"responsive()\" onload=\"responsive()\">\n")

page.write(
    "<div id=\"wrapper\">\n"
        "<div id=\"overlay\">\n"
        "</div>\n"
        "<my-sidebar></my-sidebar>\n"
        "<div id=\"page-content-wrapper\">\n"
            "<div id=\"content\">\n"
                "<div class=\"container-fluid p-0 px-lg-0 px-md-0\">\n"
                    "<my-navbar></my-navbar>\n"
                "</div>\n"
            "</div>\n"
        "</div>\n"
    "</div>\n"
)

page.write("</body>\n")
#fim body

page.write("<script src=\"../js/main.js\"></script>\n")
page.write("<script src=\"../js/script.js\"></script>\n")

page.write("</html>\n")
#fim do html

# script
page.write("<script>\n")
page.write("const indexPage = false;\n")
page.write("getData(indexPage);\n")
page.write("</script>\n")
page.close()
