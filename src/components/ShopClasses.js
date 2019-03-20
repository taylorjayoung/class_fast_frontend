import React, {Component} from 'react'
import './ShopClasses.css'

export default class ShopClasses extends Component {
  render(){
    return (
      <div className="ShopContainer">
        <div className="ShopContainerHeader"> <h1> ShopContainer </h1> </div>
        <div className="FilterBar">
          <div className="LocationPreferenceDiv">

            <form>
            <p> Location </p>

              <label className="locationListing">
                UES
                <input type="checkbox"value="UES"/>
              </label>

              <label className="locationListing">
                Midtown East
                <input type="checkbox"value="Midtown East"/>
              </label>

              <label className="locationListing">
                Midtown
                <input type="checkbox"value="Midtown"/>
              </label>

              <label className="locationListing">
                Midtown West
                <input type="checkbox"value="Midtown West"/>
              </label>

              <label className="locationListing">
                UWS
                <input type="checkbox"value="UWS"/>
              </label>

              <label className="locationListing">
                LES
                <input type="checkbox"value="LES"/>
              </label>

              <label className="locationListing">
                East Village
                <input type="checkbox"value="East Village"/>
              </label>

              <label className="locationListing">
                Tribeca
                <input type="checkbox"value="Tribeca"/>
              </label>

              <label className="locationListing">
                Midtown West
                <input type="checkbox"value="Midtown West"/>
              </label>

              <label className="locationListing">
                Brooklyn
                <input type="checkbox"value="Brooklyn"/>
              </label>

              <label className="locationListing">
                Queens
                <input type="checkbox"value="Queens"/>
              </label>

              <label className="locationListing">
                Harlem
                <input type="checkbox"value="Harlem"/>
              </label>

              <label className="locationListing">
                Soho
                <input type="checkbox"value="Soho"/>
              </label>

            </form>

          </div>
          <div className="PricePreferenceDiv">

            <form>
              <p> Price </p>

                <label className="priceListing">
                  5-10
                  <input type="checkbox"value="5-10"/>
                </label>

                <label className="priceListing">
                  10-20
                  <input type="checkbox"value="10-20"/>
                </label>

                <label className="priceListing">
                  20+
                  <input type="checkbox"value="20+"/>
                </label>

            </form>

          </div>
          <div className="TypePreferenceDiv">

            <form>

              <p> Type </p>

                <label className="typeListing">
                  KickBoxing
                  <input type="checkbox"value="KickBoxing"/>
                </label>

                <label className="typeListing">
                  Cycling
                  <input type="checkbox"value="Cycling"/>
                </label>

                <label className="typeListing">
                  Cardio
                  <input type="checkbox"value="Cardio"/>
                </label>

                <label className="typeListing">
                  Bootcamp
                  <input type="checkbox"value="Bootcamp"/>
                </label>

                <label className="typeListing">
                  Running
                  <input type="checkbox"value="Running"/>
                </label>

            </form>

          </div>
        </div>
      </div>
    )
  }
}
