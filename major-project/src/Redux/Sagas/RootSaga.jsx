import { all } from "redux-saga/effects";

import maincategorySaga from "./MaincategorySaga";
import subcategorySaga from "./SubcategorySaga";
import brandSaga from "./BrandSaga";
import productSaga from "./ProductSaga";
import testmonialSaga from "./TestmonialsSaga";
import cartSaga from "./CartSaga";
import wishlistSaga from "./WishlistSaga";
import checkoutSaga from "./CheckoutSaga";
import newsletterSaga from "./NewsletterSaga";
import contactUsSaga from "./ContactUsSaga";
export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga(),
        testmonialSaga(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        newsletterSaga(),
        contactUsSaga()
    ])
}