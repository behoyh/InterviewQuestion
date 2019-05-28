
export class Cascade {
    public static Updates(ary: any[]): any[] {

        for (var i = 0; i < Object.keys(ary).length - 1; i++) {

            for (var k = 0; k < Object.keys(ary).length - 1; k++) {

                if (!ary[k] || ary[k].input === undefined || !Array.isArray(ary[k].input) || !ary[k].input.length) {
                    continue;
                }
                if (!ary[i] || ary[i].input === undefined || !Array.isArray(ary[i].input) || !ary[i].input.length) {
                    continue;
                }

                if (ary[i].input.indexOf(k) != -1) {
                    ary[k].input.push(i)
                    ary[k].input.filter(function(elem, index, self) {
                        return index === self.indexOf(elem);
                    });
                    this.Updates(ary[k].input);
                }
            }
        }

        return ary;
    }
}