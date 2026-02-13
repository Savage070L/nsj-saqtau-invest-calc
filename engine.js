(function () {
    /* Base64-encoded mortality + CI tables {m, f, cm, cf} */
    var _z = "eyJtIjpbMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDEuMzksMS43NSwxLjg0LDEuODQsMS44NSwxLjg3LDEuODgsMS44OCwxLjg5LDEuOTEsMS45MiwxLjkzLDEuOTMsMS45NCwxLjk2LDEuOTcsMS45NywxLjk4LDIuMCwyLjExLDIuMjcsMi40NCwyLjY2LDIuODksMy4xNCwzLjM5LDMuNjYsMy45Nyw0LjMsNC42OSw1LjE0LDUuNzIsNi4zNCw3LjAzLDcuNzQsOC40Niw5LjIxLDEwLjAsMTAuODgsMTEuODgsMTMuMDMsMTQuMzUsMTUuODEsMTcuNDEsMTkuMDcsMjAuODMsMjIuNzIsMjQuOCwyNy4xNCwyOS44LDMyLjgyLDM2LjIyLDQwLjA1LDQ0LjMzLDQ5LjExLDU0LjI3LDU5Ljk3LDY2LjI3LDczLjIzLDgwLjkyLDg5LjQyLDk4LjgyLDEwOS4yLDEyMC42NywxMzMuMzUsMTQ3LjM2LDE2Mi44NCwxNzkuOTUsMTk4Ljg2LDIxOS43NiwyNDIuODUsMjY4LjM3LDI5Ni41NywzMjcuNzMsMzYyLjE3LDQwMC4yMiw0NDIuMjcsNDg4Ljc0LDU0MC4wOSw1OTYuODQsNjU5LjU1LDcyOC44NSw4MDUuNDMsODkwLjA2LDk4My41OF0sImYiOlswLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMS4wNiwxLjA4LDAuOTgsMS4wMSwxLjAyLDEuMDQsMS4wNiwxLjA4LDEuMSwxLjExLDEuMTMsMS4xNSwxLjE3LDEuMiwxLjI0LDEuMjgsMS4zMywxLjQxLDEuNDgsMS41NSwxLjY2LDEuNzUsMS44NSwxLjk2LDIuMDYsMi4xOSwyLjM0LDIuNTEsMi43LDIuOTEsMy4xNCwzLjQsMy42OCw0LjAsNC4zMyw0LjY5LDUuMDYsNS40NCw1Ljg2LDYuMjksNi44LDcuNDYsOC4yMSw5LjA0LDkuOTMsMTAuODksMTEuOSwxMy4wNCwxNC4zMiwxNS43OSwxNy41LDE5LjQ1LDIxLjc2LDI0LjQ2LDI3LjY2LDMwLjk0LDM0LjYxLDM4LjcyLDQzLjMyLDQ4LjQ2LDU0LjIxLDYwLjY0LDY3Ljg0LDc1Ljg5LDg0LjksOTQuOTgsMTA2LjI1LDExOC44NiwxMzIuOTcsMTQ4Ljc1LDE2Ni40LDE4Ni4xNSwyMDguMjQsMjMyLjk1LDI2MC42LDI5MS41MywzMjYuMTMsMzY0LjgzLDQwOC4xMyw0NTYuNTcsNTEwLjc2LDU3MS4zOCw2MzkuMTksNzE1LjA1LDc5OS45MV0sImNtIjpbMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMzIsMC4zMiwwLjMyLDAuMzIsMC4zMiwwLjM1LDAuNDMsMC40MywwLjQ1LDAuNDUsMC40NSwwLjQyLDAuNDUsMC40NSwwLjUzLDAuNjYsMC43NSwwLjkxLDEuMTIsMS4yOSwxLjU1LDEuODYsMi4yOCwyLjc3LDMuMzIsMy43NSw0LjM1LDQuNTgsNC44Myw1LjI3LDUuNzEsNi4xNCw2LjksNy43Miw4LjQyLDkuMzEsMTAuMzEsMTEuNTcsMTIuNTksMTMuNywxNS4wNCwxNi41OCwxNy42MSwxOC41NiwxOS4zOSwyMy4xNywyNy4wOSwyOC44MSwzMC41NywzMi40MSwzNS45NywzOS45Miw0NC4zLDQ5LjE2LDU0LjU2LDYwLjU1LDY3LjIsNzQuNTgsODIuNzcsOTEuODYsMTAxLjk0LDExMy4xMywxMjUuNTUsMTM5LjMzLDE1NC42MywxNzEuNjEsMTkwLjQ1LDIxMS4zNiwyMzQuNTYsMjYwLjMxLDI4OC44OSwzMjAuNiwzNTUuOCwzOTQuODYsNDM4LjIxLDQ4Ni4zMiw1MzkuNzEsNTk4Ljk2LDY2NC43MSw3MzcuNjgsODE4LjY2LDkwOC41MywxMDA4LjI3LDExMTguOTYsMTI0MS44XSwiY2YiOlswLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC4wLDAuMCwwLjAsMC40NiwwLjQ2LDAuNDYsMC40NiwwLjQ2LDAuNDgsMC42MiwwLjY4LDAuNzQsMC44MywwLjkzLDAuOTksMS4xMywxLjIyLDEuMywxLjQxLDEuNjIsMS43MywxLjkxLDIuMSwyLjMzLDIuNTUsMi43NywyLjk3LDMuMjIsMy41LDMuNzQsMy44Niw0LjEsNC40Miw0Ljc3LDUuMTIsNS41Nyw1Ljk5LDYuMzUsNi42LDcuMTksNy42OSw3Ljk3LDguMzIsOC44MSw5LjI3LDkuNjQsMTAuMzksMTAuOTksMTIuODMsMTQuNzgsMTUuNzksMTYuNiwxNy41LDE5LjIzLDIxLjEzLDIzLjIxLDI1LjUsMjguMDIsMzAuNzgsMzMuODIsMzcuMTYsNDAuODMsNDQuODYsNDkuMjksNTQuMTUsNTkuNDksNjUuMzYsNzEuODEsNzguODksODYuNjcsOTUuMjIsMTA0LjYxLDExNC45MywxMjYuMjcsMTM4LjczLDE1Mi40MiwxNjcuNDYsMTgzLjk4LDIwMi4xMywyMjIuMDcsMjQzLjk4LDI2OC4wNSwyOTQuNDksMzIzLjU0LDM1NS40NiwzOTAuNTMsNDI5LjA2LDQ3MS4zOV19";
    var _q0 = JSON.parse(atob(_z));

    /* Constants */
    var _w0 = 100, _w2 = 0.01;
    var _fa = { annual: 1.0, semiannual: 0.51, quarterly: 0.2575, monthly: 0.0875 };

    /* GOLD interest rate by term */
    var _ir = {1:0.011,2:0.015,3:0.0215,4:0.0249,5:0.0269,6:0.0281,7:0.0289,8:0.0295,9:0.0298,10:0.03,11:0.03,12:0.03,13:0.03,14:0.03,15:0.032,16:0.032,17:0.032,18:0.032,19:0.032,20:0.035};
    function _gi(n) { var k = Math.min(Math.max(n, 1), 20); return _ir[k] || 0.035; }

    /* Expense table: G2,G3,G4,G5,G6,G7,H4 by term */
    var _ex = {
        "3":{G2:0.0596,G3:0.01,G4:0,G5:0,G6:0.01,G7:0,H4:0.021},
        "4":{G2:0.0762,G3:0.01,G4:0,G5:0,G6:0.01,G7:0,H4:0.025},
        "5":{G2:0.0927,G3:0.01,G4:0,G5:0,G6:0.01,G7:0,H4:0.027},
        "6":{G2:0.1473,G3:0.0717,G4:0,G5:0,G6:0.02,G7:0.003,H4:0.029},
        "7":{G2:0.1694,G3:0.0812,G4:0,G5:0,G6:0.03,G7:0.003,H4:0.03},
        "8":{G2:0.1914,G3:0.0906,G4:0,G5:0,G6:0.03,G7:0.003,H4:0.03},
        "9":{G2:0.2134,G3:0.1001,G4:0,G5:0,G6:0.03,G7:0.003,H4:0.03},
        "10":{G2:0.2505,G3:0.1245,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.03},
        "11":{G2:0.2725,G3:0.134,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.03},
        "12":{G2:0.2946,G3:0.1434,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.03},
        "13":{G2:0.3167,G3:0.1528,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.03},
        "14":{G2:0.3387,G3:0.1623,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.03},
        "15":{G2:0.3608,G3:0.1717,G4:0,G5:0,G6:0.04,G7:0.003,H4:0.025}
    };

    /* Rider tariffs */
    var _rd = {
        accidental_death: { t: 0.002, e: 0.25, q: 0.4 },
        disability_accident_lumpsum: { t: 0.0007, e: 0.25, q: 0.4 },
        trauma: { t: 0.006, e: 0.05, q: 0.25 },
        hospitalization: { t: 0.0015, e: 0.05, q: 0.25 }
    };

    function _ek(n) { return String(Math.min(Math.max(n, 3), 15)); }

    /* Get expenses: G6,G7 from n; G2-G5 from t; H4 from n */
    function _gx(n, t) {
        var en = _ex[_ek(n)];
        var G6 = en.G6, G7 = en.G7, H4 = en.H4;
        var G2, G3, G4, G5;
        if (t === 1) {
            G2 = H4; G3 = 0; G4 = 0; G5 = 0;
        } else {
            var et = _ex[_ek(t)];
            G2 = Math.ceil(et.G2 * 100) / 100;
            G3 = Math.ceil(et.G3 * 100) / 100;
            G4 = et.G4 || 0;
            G5 = et.G5 || 0;
        }
        return { G2:G2, G3:G3, G4:G4, G5:G5, G6:G6, G7:G7, H4:H4 };
    }

    /* Build commutation table: D, N, S, C, M, R (death_timing=2, end of year) */
    function _b1(r, i) {
        var v = 1 / (1 + i), u = [], l = [], D = [], N = [], C = [], M = [], R = [], x;
        for (x = 0; x <= _w0; x++) u[x] = r[x] / 1000;
        u[_w0] = 1.0;
        l[0] = 1000000;
        for (x = 0; x < _w0; x++) l[x + 1] = l[x] * (1 - u[x]);
        for (x = 0; x <= _w0; x++) D[x] = l[x] * Math.pow(v, x);
        N[_w0] = D[_w0];
        for (x = _w0 - 1; x >= 0; x--) N[x] = D[x] + N[x + 1];
        for (x = 0; x < _w0; x++) C[x] = (l[x] - l[x + 1]) * Math.pow(v, x + 1);
        C[_w0] = (l[_w0] >= 1) ? 1 : 0;
        M[_w0] = C[_w0];
        for (x = _w0 - 1; x >= 0; x--) M[x] = C[x] + M[x + 1];
        R[_w0] = M[_w0];
        for (x = _w0 - 1; x >= 0; x--) R[x] = M[x] + R[x + 1];
        return { D:D, N:N, C:C, M:M, R:R, l:l, q:u };
    }


    /* Calc alfa (acquisition load) */
    function _alfa(ge, Dx, Dx1, Dx2, Dx3, t) {
        if (t === 1) return ge.H4;
        var a = ge.G2;
        if (Dx > 0) {
            a += ge.G3 * Dx1 / Dx;
            if (ge.G4 > 0) a += ge.G4 * Dx2 / Dx;
            if (ge.G5 > 0) a += ge.G5 * Dx3 / Dx;
        }
        return a;
    }

    /* Main premium: BP_1 (full SA) and BP_2 (paid premiums) */
    function _p1(tb, x, n, t) {
        var Dx = tb.D[x], Dxn = tb.D[x+n], Dx1 = tb.D[x+1], Dx2 = tb.D[x+2], Dx3 = tb.D[x+3];
        var Mx = tb.M[x], Mxn = tb.M[x+n];
        var Nx = tb.N[x], Nxn = tb.N[x+n], Nxt = tb.N[x+t];
        var Rx = tb.R[x], Rxn = tb.R[x+n];
        var Ax_n = (Mx - Mxn + Dxn) / Dx;
        var Ex_n = Dxn / Dx;
        var ax_n = (Nx - Nxn) / Dx;
        var ax_t = (Nx - Nxt) / Dx;
        var IAx_n = (Rx - Rxn - n * Mxn) / Dx;
        var NP_1 = (ax_t > 0) ? Ax_n / ax_t : 0;
        var NP_2 = (ax_n - IAx_n > 0) ? Ex_n / (ax_n - IAx_n) : 0;
        var ge = _gx(n, t);
        var al = _alfa(ge, Dx, Dx1, Dx2, Dx3, t);
        var num1 = Ax_n + ge.G7 * ax_n;
        var den1 = ax_t - ge.G6 * ax_t - al;
        var BP_1 = (den1 > 0) ? num1 / den1 : 0;
        var num2 = Ex_n + ge.G7 * ax_n;
        var den2 = ax_t - IAx_n - ge.G6 * ax_t - al;
        var BP_2 = (den2 > 0) ? num2 / den2 : 0;
        return {
            Ax_n:Ax_n, Ex_n:Ex_n, ax_n:ax_n, ax_t:ax_t, IAx_n:IAx_n, alfa:al,
            BP_1:BP_1, BP_2:BP_2, NP_1:NP_1, NP_2:NP_2, ge:ge,
            Dx:Dx, Dx1:Dx1, Dx2:Dx2, Dx3:Dx3, Dxn:Dxn,
            Mx:Mx, Mxn:Mxn, Nx:Nx, Nxn:Nxn, Nxt:Nxt, Rx:Rx, Rxn:Rxn
        };
    }

    /* Reserves table
     * Страховые резервы ВСЕГДА по формуле Резерв_1 (Ax-based).
     * Выкупные: full_sum_assured → Резерв_1, paid_premiums → Резерв_2 (Ex-based, IAx / D(x)).
     */
    function _r1(tb, x, n, t, BP, ge, SA, dbt) {
        var Dx = tb.D[x]; // D(x) базового возраста — для IAx в Резерв_2
        var Mxn = tb.M[x+n], Dxn = tb.D[x+n], Nxn = tb.N[x+n], Nxt = tb.N[x+t], Rxn = tb.R[x+n];
        var rv = [], k;
        for (k = 1; k <= n; k++) {
            var xk = x + k, Dxk = tb.D[xk];
            if (Dxk === 0) { rv.push({year:k, age:xk, reserve:0, surrender:0, reduced_sa:0, reserve_rate:0}); continue; }
            var Mxk = tb.M[xk], Nxk = tb.N[xk], Rxk = tb.R[xk];
            var Axk = (Mxk - Mxn + Dxn) / Dxk;
            var Exk = Dxn / Dxk;
            var ank = (Nxk - Nxn) / Dxk;
            var atk = (k < t) ? (Nxk - Nxt) / Dxk : 0;
            var al;
            if (t === 1) al = 0;
            else if (k === 1) {
                al = ge.G3;
                if (ge.G4 > 0 && Dxk > 0) al += ge.G4 * tb.D[x+2] / Dxk;
                if (ge.G5 > 0 && Dxk > 0) al += ge.G5 * tb.D[x+3] / Dxk;
            } else if (k === 2) {
                al = ge.G4 || 0;
                if (ge.G5 > 0 && Dxk > 0) al += ge.G5 * tb.D[x+3] / Dxk;
            } else if (k === 3) {
                al = ge.G5 || 0;
            } else al = 0;

            // Резерв_1 (Ax-based) — ВСЕГДА для отображения «Страховые резервы»
            var rr = Axk + ge.G7 * ank + BP * (al + ge.G6 * atk - atk);

            // Выкупные: зависят от типа защиты
            var surr_base;
            if (dbt === 'paid_premiums') {
                // Резерв_2 (Ex-based): IAx делится на D(x), НЕ D(x+k)
                var IAxk = (Rxk - Rxn - (n - k) * Mxn) / Dx;
                surr_base = Exk + ge.G7 * ank + BP * IAxk + BP * (al + ge.G6 * atk - atk);
            } else {
                surr_base = rr; // full_sum_assured — тот же Резерв_1
            }

            var sr = surr_base - (1 - surr_base) * _w2;
            var res = rr * SA;
            var sur = Math.max(sr * SA, 0);
            if (k === n) sur = SA;
            var reduced = (Axk > 0) ? Math.round(sur / Axk) : 0;
            rv.push({year:k, age:xk, reserve_rate:rr, reserve:Math.round(res), surrender:Math.round(sur), reduced_sa:reduced});
        }
        return rv;
    }

    /* Simple rider premium */
    function _p2(rk, rs, n, ff, sg) {
        var rc = _rd[rk];
        if (!rc) return null;
        var gt = Math.round((rc.t * (1 + rc.e)) / (1 - rc.q) * 10000) / 10000;
        if (sg) return { gross_tariff:gt, rider_sum:rs, rider_premium:gt * rs * n };
        return { gross_tariff:gt, rider_sum:rs, rider_premium:gt * rs * ff };
    }


    /* Main calculate function */
    function _ca(p) {
        var db = new Date(p.dob), td = new Date();
        var ag = td.getFullYear() - db.getFullYear();
        var m = td.getMonth() - db.getMonth();
        if (m < 0 || (m === 0 && td.getDate() < db.getDate())) ag--;
        var x = ag, n = parseInt(p.term), fr = p.frequency || 'annual';
        var md = p.mode || 'sa_to_premium';
        var dbt = p.death_benefit_type || 'full_sum_assured';
        var usd_rate = parseFloat(p.usd_rate) || 500;
        var sg = (fr === 'single');
        var gn = (p.gender === 'male') ? 'm' : 'f';
        var qx = _q0[gn], ff = sg ? 1 : (_fa[fr] || 1);
        var exit_age = x + n;
        var i = _gi(n);

        if (exit_age > 70) {
            return {
                success: false,
                error: '\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442 ' + exit_age + ' \u043b\u0435\u0442. \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u2014 70 \u043b\u0435\u0442.',
                validation: 'exit_age_exceeded', age: x, exit_age: exit_age
            };
        }

        var tb = _b1(qx, i);
        var t = sg ? 1 : n;
        var r = _p1(tb, x, n, t);
        var BP = (dbt === 'paid_premiums') ? r.BP_2 : r.BP_1;
        var NP = (dbt === 'paid_premiums') ? r.NP_2 : r.NP_1;
        var ge = r.ge;

        /* Parse riders */
        var ri_in = p.riders || {};
        var sa_linked = [];
        if (ri_in.accidental_death && ri_in.accidental_death.enabled) sa_linked.push('accidental_death');
        if (ri_in.disability_accident_lumpsum && ri_in.disability_accident_lumpsum.enabled) sa_linked.push('disability_accident_lumpsum');
        var fixed_r = [];
        var _fkeys = ['trauma', 'hospitalization'];
        for (var fi = 0; fi < _fkeys.length; fi++) {
            var _fk = _fkeys[fi];
            var _fs = ri_in[_fk] || {};
            if (_fs.enabled) fixed_r.push([_fk, parseFloat(_fs.sum || 0)]);
        }

        var SA, ap, gp;

        if (md === 'premium_to_sa') {
            var total_pm = parseFloat(p.premium);
            /* Fixed rider premiums */
            var fixed_total = 0;
            for (var ffi = 0; ffi < fixed_r.length; ffi++) {
                var _fr = _p2(fixed_r[ffi][0], fixed_r[ffi][1], n, ff, sg);
                if (_fr) fixed_total += _fr.rider_premium;
            }
            /* Initial SA guess */
            var remaining = total_pm - fixed_total;
            SA = (sg) ? (BP > 0 ? remaining / BP : 0) : (BP > 0 ? remaining / (BP * ff) : 0);

            /* Iterate for SA-linked riders */
            for (var it = 0; it < 100; it++) {
                ap = BP * SA;
                var sa_total = 0;
                for (var si = 0; si < sa_linked.length; si++) {
                    var _sr = _p2(sa_linked[si], SA, n, ff, sg);
                    if (_sr) sa_total += _sr.rider_premium;
                }
                remaining = total_pm - fixed_total - sa_total;
                if (remaining <= 0) remaining = 0;
                var new_sa = (sg) ? (BP > 0 ? remaining / BP : 0) : (BP > 0 ? remaining / (BP * ff) : 0);
                if (Math.abs(new_sa - SA) < 1) { SA = new_sa; break; }
                SA = new_sa;
            }
            SA = Math.round(SA);
            ap = BP * SA;
            gp = sg ? ap : BP * SA * ff;

            /* Min premium validation */
            var min_annual = 1000 * usd_rate;
            if (Math.round(ap) < min_annual) {
                return {
                    success: false,
                    error: '\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u0434\u043e\u0432\u0430\u044f \u043f\u0440\u0435\u043c\u0438\u044f \u2014 1 000 USD (' + Math.round(min_annual).toLocaleString('ru-RU') + ' KZT \u043f\u0440\u0438 \u043a\u0443\u0440\u0441\u0435 ' + usd_rate.toFixed(2) + '). \u0422\u0435\u043a\u0443\u0449\u0430\u044f: ' + Math.round(ap).toLocaleString('ru-RU') + ' KZT.',
                    validation: 'min_premium'
                };
            }
        } else {
            SA = parseFloat(p.sum_assured);
            ap = BP * SA;
            gp = sg ? ap : BP * SA * ff;
            /* Min premium validation */
            var min_annual2 = 1000 * usd_rate;
            if (Math.round(ap) < min_annual2) {
                return {
                    success: false,
                    error: '\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u0434\u043e\u0432\u0430\u044f \u043f\u0440\u0435\u043c\u0438\u044f \u2014 1 000 USD (' + Math.round(min_annual2).toLocaleString('ru-RU') + ' KZT \u043f\u0440\u0438 \u043a\u0443\u0440\u0441\u0435 ' + usd_rate.toFixed(2) + '). \u0422\u0435\u043a\u0443\u0449\u0430\u044f: ' + Math.round(ap).toLocaleString('ru-RU') + ' KZT.',
                    validation: 'min_premium'
                };
            }
        }

        /* Reserves */
        var rv = _r1(tb, x, n, t, BP, ge, SA, dbt);

        /* Calculate final riders */
        var ri = {}, rt = 0;
        for (var ai = 0; ai < sa_linked.length; ai++) {
            var ak = sa_linked[ai];
            var ar = _p2(ak, SA, n, ff, sg);
            if (ar) { ri[ak] = ar; rt += ar.rider_premium; }
        }
        for (var bi = 0; bi < fixed_r.length; bi++) {
            var bk = fixed_r[bi][0], bs = fixed_r[bi][1];
            var br = _p2(bk, bs, n, ff, sg);
            if (br) { ri[bk] = br; rt += br.rider_premium; }
        }

        var sa_usd = usd_rate > 0 ? Math.round(SA / usd_rate * 100) / 100 : 0;
        var ap_usd = usd_rate > 0 ? Math.round(Math.round(ap) / usd_rate * 100) / 100 : 0;
        var gp_usd = usd_rate > 0 ? Math.round(Math.round(gp) / usd_rate * 100) / 100 : 0;
        var tp_usd = usd_rate > 0 ? Math.round(Math.round(gp + rt) / usd_rate * 100) / 100 : 0;

        return {
            success: true,
            age: x, exit_age: exit_age, term: n, payment_term: t,
            frequency: fr, mode: md,
            death_benefit_type: dbt,
            interest_rate: i, usd_rate: usd_rate,
            sum_assured: SA, sum_assured_usd: sa_usd,
            BP_1: r.BP_1, BP_2: r.BP_2,
            BP_rate: BP, NP_rate: NP,
            annual_premium: Math.round(ap),
            annual_premium_usd: ap_usd,
            gross_premium: Math.round(gp),
            gross_premium_usd: gp_usd,
            net_premium: Math.round(NP * SA),
            freq_factor: ff,
            reserves: rv,
            riders: ri,
            total_rider_premium: Math.round(rt),
            total_premium: Math.round(gp + rt),
            total_premium_usd: tp_usd,
            sa_linked_riders: sa_linked,
            fixed_riders: fixed_r.map(function(f){return f[0];}),
            Ax_n: r.Ax_n, Ex_n: r.Ex_n, ax_n: r.ax_n, ax_t: r.ax_t,
            IAx_n: r.IAx_n, alfa: r.alfa,
            G2: ge.G2, G3: ge.G3, G4: ge.G4, G5: ge.G5, G6: ge.G6, G7: ge.G7
        };
    }

    window.NSJInvestEngine = { calculate: _ca };
})();
