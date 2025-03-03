(function waitForTarteaucitron(retries = 0, maxRetries = 10) {
    if (typeof window.tarteaucitron !== "undefined") {
      const lang = navigator.language;
  
      window.tarteaucitronForceLanguage = lang; // Configuration de la langue
  
      window.tarteaucitron.init({
    	  "privacyUrl": "", /* Privacy policy url */
          "bodyPosition": "top", /* top to bring it as first element for accessibility */
    	  "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    	  "cookieName": "tarteaucitron", /* Cookie name */
    	  "orientation": "middle", /* Banner position (top - bottom) */
          "groupServices": false, /* Group services by category */
          "showDetailsOnClick": true, /* Click to expand the description */
          "serviceDefaultState": "wait", /* Default state (true - wait - false) */               
    	  "showAlertSmall": false, /* Show the small banner on bottom right */
    	  "cookieslist": false, /* Show the cookie list */                
          "closePopup": true, /* Show a close X on the banner */
          "showIcon": true, /* Show cookie icon to manage cookies */
          //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
          "iconPosition": "BottomRight", /* Position of the cookie (BottomRight - BottomLeft - TopRight - TopLeft) */
    	  "adblocker": false, /* Show a Warning if an adblocker is detected */               
          "DenyAllCta" : true, /* Show the deny all button */
          "AcceptAllCta" : true, /* Show the accept all button */
          "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
          "alwaysNeedConsent": false, /* Ask the consent for "Privacy by design" services */               
    	  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
    	  "removeCredit": false, /* Remove credit link */
    	  "moreInfoLink": true, /* Show more info link */
          "useExternalCss": false, /* Expert mode: do not load the tarteaucitron.css file */
          "useExternalJs": false, /* Expert mode: do not load the tarteaucitron js files */
    	  //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */                
          "readmoreLink": "", /* Change the default readmore link */
          "mandatory": true, /* Show a message about mandatory cookies */
          "mandatoryCta": false, /* Show the disabled accept button when mandatory on */
          //"customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */
          "googleConsentMode": true, /* Enable Google Consent Mode v2 for Google ads & GA4 */
          "bingConsentMode": true, /* Enable Bing Consent Mode for Clarity & Bing Ads */
          "partnersList": true /* Show the number of partners on the popup/middle banner */
        });
        (window.tarteaucitron.job = window.tarteaucitron.job || []).push("recaptcha");
        
        // Récupère le bouton de sauvegarde
        const mutationCallback = () => { 
            const tarteaucitronSaveButton = document.getElementById("tarteaucitronSaveButton");
            if (tarteaucitronSaveButton) {
                const handleConsentSave = () => {
                    window.location.reload();
                };
                tarteaucitronSaveButton.addEventListener("click", handleConsentSave);
    
                observer.disconnect();
            }
        };

        const observer = new MutationObserver(mutationCallback);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            observer.disconnect();
        };
    } else (retries < maxRetries) 
        setTimeout(() => waitForTarteaucitron(retries + 1, maxRetries), 500);
    }
)();
