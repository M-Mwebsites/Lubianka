$("#customForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#mail").val();
    var company = $("#company").val();
    var reason = $("#reason").val();

    var googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_QtvOu5hh3ZByH7JMH55ofC_0LBcAdsXhU-F-Dfvxzow1eg/formResponse"; // Replace with your Google Form URL

    $.ajax({
        url: googleFormUrl,
        data: {
            "entry.1383580364": name,
            "entry.115097568": email,
            "entry.1917148958": company,
            "entry.1672362927": reason,
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
        0: function () {
            $("#customForm").hide();
            $("#successMessage").show();
        },
        200: function () {
            $("#failureMessage").show();
        },
        },
    });
});
  