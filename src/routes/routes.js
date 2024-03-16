export const ROUTES = Object.freeze({
    home: "/",
    tvShow: "/tv-shows",
    detail: "/tv-show/detail",
    // rlebhar : Seule route qu'on ne va pas mettre ici, car il n'existe pas vraiment de route "*" il s'agit d'une convention propre a react router
    // tout comme le /:id que nous avons pas mis ici, on le mettra en dur dans le path.
    notFound: "*",
})