import React from 'react'
import './card.css'
import $ from 'jquery'



export default function CardR() {

    var $cell = $('.card');

    //open and close card when clicked on card
    $cell.find('.js-expander').click(function () {

        var $thisCell = $(this).closest('.card');

        if ($thisCell.hasClass('is-collapsed')) {
            $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
            $thisCell.removeClass('is-collapsed').addClass('is-expanded');

            if ($cell.not($thisCell).hasClass('is-inactive')) {
                //do nothing
            } else {
                $cell.not($thisCell).addClass('is-inactive');
            }

        } else {
            $thisCell.removeClass('is-expanded').addClass('is-collapsed');
            $cell.not($thisCell).removeClass('is-inactive');
        }
    });

    //close card when click on cross
    $cell.find('.js-collapser').click(function () {

        var $thisCell = $(this).closest('.card');

        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');

    });

    return (



        <div className="wrapper">

            <div className="header">
                <h1 className="header__title">Expanding Card Grid</h1>
                <h2 className="header__subtitle">with Flexbox</h2>
            </div>

            <div className="cards">

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                {/* <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div>

                <div className=" card [ is-collapsed ] ">
                    <div className="card__inner [ js-expander ]">
                        <span>Card</span>
                        <i className="fa fa-folder-o"></i>
                    </div>
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]"></i>
                        Expander
                    </div>
                </div> */}

            </div>
          
        </div>


    )
}
