import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


const Layout = ({ children, seoData, isNoIndex }) => {
  const { asPath: canonicalPath } = useRouter();
  const canonicalUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  return (
    <Fragment>
      <Head>
        {/* SEO Begin  */}
        <title>{`${seoData?.title}`}</title>
        {isNoIndex && <meta name="robots" content="noindex" />}
        <meta name="description" content={seoData?.description} />
        {/* <meta name="author" content={seoData?.author} /> */}
        {/* SEO End */}

        {/* Open Graph Start  */}
        <meta property="og:type" content={seoData?.openGraph.type} />
        <meta property="og:locale" content={seoData?.openGraph.locale} />
        <meta property="og:url" content={seoData?.openGraph.url} />
        <meta property="og:title" content={seoData?.openGraph.title} />
        <meta
          property="og:description"
          content={seoData?.openGraph.description}
        />
        <meta property="og:image" content={seoData?.openGraph.image} />
        <meta property="og:site_name" content={seoData?.openGraph.site_name} />
        {/* Open Graph End */}

        {/* Twitter Card Info Start */}
        <meta name="twitter:card" content={seoData?.twitter.card} />
        <meta name="twitter:site" content={seoData?.twitter.site} />
        <meta name="twitter:title" content={seoData?.twitter.title} />
        <meta
          name="twitter:description"
          content={seoData?.twitter.description}
        />
        <meta name="twitter:image" content={seoData?.twitter.image} />
        {/* Twitter Card Info End */}

        {/* Canonical */}
        <link rel="canonical" href={`${canonicalUrl}${canonicalPath}`} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
        <link rel="stylesheet" href="style/style.css"/>
      </Head>

      {/* navigations */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="images/logos.svg" width="60" height="60" class="d-inline-block align-top" alt=""/>
        </a>
        <span class="txt-logo text-lg">Receh</span>
          <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
            <ul class="navbar-nav txt-nav">
              <li class="nav-item mx-5">
                <a class="txt-nav" href="/">Beranda</a>
              </li>
              <li class="nav-item mx-5">
                <a class="txt-nav" href="../../money-changer">Tukarkan</a>
              </li>
              <li class="nav-item mx-5">
                <a class="txt-nav" href="cart.html">
                    <img src="images/invoice.svg" alt="" width="27" height="27" class="d-inline-block align-top"/>
                </a>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>      
      {/* navigations */}

      {children}

      <footer class="bg-cus-tersier mt-5">
        <div class="row p-5">
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center justify-content-center footer-bg-logo">
                <a class="mx-5 navbar-brand" href="">
                  <img src="images/logos.svg" width="47" height="47" alt=""/>
                </a>
              </div>
              <div class="txt-logo text-lg text-white px-3">Receh</div>
            </div>
            <p class="mt-3 text-white">Platform yang dapat membantu anda untuk menukar uang.</p>
          </div>
          <div class="col-4 text-center">
            <p class="txt-h2 text-white">Sponsors</p>
          </div>
          <div class="col-4 d-flex justify-content-end">
            {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="139" id="gmap_canvas" src="https://maps.google.com/maps?q=rsud%20soebandi%20jember&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a><br><style>.mapouter{position:relative;text-align:right;height:139px;width:300px;}</style><a href="https://www.embedgooglemap.net"/>how to embed google map in email</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:139px;width:300px;}</style></div></div> */}
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;
