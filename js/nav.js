        /***       NAV       ***/
        $(document).ready(function () {
            $(".navbar_burger").click(function () {
                $(".navbar").slideToggle();
            });

            $(window).resize(function () {
                if (window.innerWidth >= 1200) {
                    $(".navbar").show();
                }
            });

            $(window).resize(function () {
                if (window.innerWidth <= 1199) {
                    $(".navbar").hide();
                }
            });
        });