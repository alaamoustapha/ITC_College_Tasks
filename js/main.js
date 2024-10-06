var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('site-url');
//console.log(siteName,siteUrl);
var overlay = document.querySelector("#overlay");



function checkName() {
    if (siteName.value.length < 3) {
        return false;
    } else {
        return true;
    }
}

function checkURL(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

function checkNameInput() {
    if (checkName()) {
        siteName.classList.remove("is-invalid");
        siteName.classList.add("is-valid");
    } else {
        siteName.classList.remove("is-valid");
        siteName.classList.add("is-invalid");
    }
}

function checkURLInput() {
    if (checkURL(siteUrl.value)) {
        siteUrl.classList.remove("is-invalid");
        siteUrl.classList.add("is-valid");
    } else {
        siteUrl.classList.remove("is-valid");
        siteUrl.classList.add("is-invalid");
    }
}
var urlList = [];
function addUrl() {
    //e.preventDefault();
    var url = {
        name: siteName.value,
        url: siteUrl.value
    };
    if (checkName() && checkURL(siteUrl.value)) {
        urlList.push(url);
        displayUrl();
        clearInput();
    } else {
        overlay.classList.remove("d-none");
        overlay.classList.add("d-flex");
    }

    console.log(url);


}
function clearInput() {
    siteName.value = "";
    siteUrl.value = "";
    siteName.classList.remove("is-valid");
    siteUrl.classList.remove("is-valid");

}
function displayUrl() {
    var dataBag = "";
    for (i = 0; i < urlList.length; i++) {
        dataBag +=
            `<tr>
        <td>${i + 1} </td>
        <td>${urlList[i].name}</td>
       <td>
                  <button class="btn btn-visit text-white"  onclick="visitSite(${i})">
                    <i class="fa-regular fa-eye" style="color: #25D366"></i>
                    Visit
                  </button>
        </td>
        <td><button onclick="deleteItem(${i})" class = 'btn bg-danger btn-sm'> delete </button></td>
        </tr>`
    }

    document.getElementById('tableBody').innerHTML = dataBag;

}


function deleteItem(index) {
    urlList.splice(index, 1);
    console.log(urlList);
    displayUrl();
}

function visitSite(index) {
    window.open(urlList[index].url);
}

document.getElementById("btn-close").addEventListener("click", function () {
    overlay.classList.remove("d-flex");
    overlay.classList.add("d-none");
  });
  