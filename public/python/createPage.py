import platform
from database import result

os = platform.system()

for i in result:
    if(os == "Linux"):
        adress = f'./public/dashboard/{i[1]}.html'
    else:
        adress = f'public/dashboard/{i[1]}.html'

    try:
        with open(f'public/dashboard/{i[1]}.html', 'r'):
            print(f'{i[1]}.html existe!')
    except IOError:
        print(f'{i[1]}.html não existe!')

        page = open(adress, "w")

        #html
        page.write(
            "<!DOCTYPE html>\n"
            "<html lang=\"en\">\n"
        )

        #head
        page.write(
            "<head>\n"
            f'<title>SafeCommerce | {i[1]}</title>\n'
            "<link rel=\"icon\" href=\"../assets/images/logo-icon.png\">\n"
            "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n"
            "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\">\n"
            "<link rel=\"stylesheet\" href=\"../css/main.css\">\n"
            "</head>\n"
        )
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
                        "<div class=\"container-fluid px-lg-4\">\n"
                            "<div class=\"row\">\n"
                                "<div class=\"col-md-12 mt-lg-4 mt-4\">\n"
                                    "<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n"
                                        f'<h1 class="h3 mb-0 text-gray-800">{i[1]}</h1>\n'
                                    "</div>\n"
                                "</div>\n"
                            "</div>\n"
                        "</div>\n"
                        "<my-footer></my-footer>\n"
                    "</div>\n"
                "</div>\n"
            "</div>\n"
        )

        page.write("</body>\n")
        #fim body

        page.write(
            "<script src=\"../js/main.js\"></script>\n"
            "<script src=\"../js/script.js\"></script>\n"
        )

        page.write("</html>\n")
        #fim do html

        # script
        page.write(
            "<script>\n"
            "const indexPage = false;\n"
            "getData(indexPage);\n"
            "</script>\n"
        )
        page.close()