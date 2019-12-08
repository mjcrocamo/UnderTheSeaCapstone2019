(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(n,e,t){"use strict";t.d(e,"b",function(){return p}),t.d(e,"e",function(){return v}),t.d(e,"f",function(){return y}),t.d(e,"c",function(){return f}),t.d(e,"a",function(){return _}),t.d(e,"d",function(){return b});var a=t(333),r=t.n(a),i=t(334),o=t.n(i);function u(){var n=r()(["\n  query SourcesQuery($typeId: ID) {\n    sources(typeId: $typeId) {\n      __typename\n      id\n      name\n      url\n      source\n    }\n  }\n"]);return u=function(){return n},n}function c(){var n=r()(["\n  query OceanConservationQuery {\n    conservationLinks {\n      __typename\n      id\n      name\n      url\n      descriptions {\n        __typename\n        id\n        content\n      }\n    }\n  }\n"]);return c=function(){return n},n}function m(){var n=r()(["\n  query SeaAnimalListQuery {\n    seaAnimals {\n      __typename\n      id\n      name\n      binomialName\n      mainImage {\n        __typename\n        id\n        url\n        alt\n      }\n    }\n  }\n"]);return m=function(){return n},n}function l(){var n=r()(["\n  query WelcomeTopicsQuery {\n    welcomeTopics {\n      __typename\n      id\n      title\n      image\n      description\n      route\n    }\n  }\n"]);return l=function(){return n},n}function d(){var n=r()(["\n  query WelcomePageQuery {\n    seaAnimals {\n      __typename\n      id\n      name\n      binomialName\n      mainImage {\n        __typename\n        id\n        url\n        alt\n      }\n    }\n  }\n"]);return d=function(){return n},n}function s(){var n=r()(["\n  query SeaAnimalDetailsQuery($seaAnimalId: ID!) {\n    seaAnimal(id: $seaAnimalId) {\n      __typename\n      id\n      name\n      binomialName\n      minSizeInches\n      maxSizeInches\n      minSizeFeet\n      maxSizeFeet\n      minWeightlbs\n      maxWeightlbs\n      animalClass\n      diet\n      averageLifeSpan\n      images {\n        __typename\n        id\n        url\n        alt\n      }\n      descriptions {\n        __typename\n        id\n        content\n      }\n      links {\n        __typename\n        id\n        name\n        url\n      }\n      videos {\n        __typename\n        id\n        url\n        alt\n      }\n      mainImage {\n        __typename\n        id\n        url\n        alt\n      }\n    }\n  }\n"]);return s=function(){return n},n}var p=o()(s()),v=o()(d()),y=o()(l()),f=o()(m()),_=o()(c()),b=o()(u())},403:function(n,e,t){"use strict";t.r(e);var a=t(10),u=t.n(a),r=t(0),c=t.n(r),m=t(327),i=t(332),l=t(84),d=t(43),s=t(325),p=t(283),v=t(331),y=t(16),f=t(5),_=t(41),b=f.w.SOURCES,S=f.w.SOURCE_NAME,E=f.v.GAMES,I=f.v.VIDEOS,g=f.v.WEBSITES,O=f.v.COURSES,h=f.v.DOCUMENTATION,A=f.v.IMAGES;e.default=function(){var o=Object(y.k)(),n=Object(i.b)(v.d,{variables:{typeId:E}}),e=Object(i.b)(v.d,{variables:{typeId:I}}),t=Object(i.b)(v.d,{variables:{typeId:g}}),a=Object(i.b)(v.d,{variables:{typeId:O}}),r=[{title:"Game Sources",data:n},{title:"Content Sources",data:t},{title:"Image Sources",data:Object(i.b)(v.d,{variables:{typeId:A}})},{title:"Video Sources",data:e},{title:"Courses",data:a},{title:"Documentation",data:Object(i.b)(v.d,{variables:{typeId:h}})}];return c.a.createElement("div",{className:o.root},c.a.createElement(d.a,{variant:f.j,gutterBottom:!0,color:"textPrimary",component:"h2",className:o.section},"Sources Cited"),r.map(function(n){var e,t,a=n.title,r=n.data;return r.loading?c.a.createElement(_.h,null):c.a.createElement("div",{className:o.section,key:a},c.a.createElement(d.a,{variant:f.j,color:"textPrimary",component:"div"},c.a.createElement(l.a,{fontWeight:"fontWeightMedium",fontSize:32},a)),c.a.createElement(s.a,{className:o.list},null==r?void 0:null===(e=r.data)||void 0===e?void 0:null===(t=e.sources)||void 0===t?void 0:t.map(function(n){var e,t=n.id,a=n.url,r=n.name,i=n.source;return c.a.createElement(p.a,{divider:!0,key:t},c.a.createElement(m.a,(e={rel:"noopener"},u()(e,"rel","noreferrer"),u()(e,"href",a),e),c.a.createElement(d.a,{component:"div"},c.a.createElement(l.a,{className:o.sourceTitle,fontWeight:"fontWeightMedium",fontSize:S,m:1},r)),c.a.createElement(d.a,{color:"textPrimary",component:"div"},c.a.createElement(l.a,{fontSize:b,m:1},i))))})))}))}}}]);