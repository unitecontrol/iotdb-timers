/*
 *  timers/hour.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-12-03
 *
 *  Hour timer
 *
 *  Copyright [2013-2015] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

var _ = require("../helpers");
var timer = require('../timer');

/**
 *  Fire an event every hour
 */
exports.HourTimer = function (paramd) {
    timer.Timer.call(this);
    this.schedule(_.defaults(paramd, {
        id: 'timer',
        name: "once per hour",
        minute: 0,
        hour_repeat: 1
    }));
};

exports.HourTimer.prototype = new timer.Timer();
exports.hour_timer = _.make_function(exports.HourTimer, "hour_repeat");
