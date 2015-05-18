var data2 =
    ["cop.xiao_owt.liao_pdl.xx_cluster.xx_servicegroup.test_service.scribe_job.scribe",
        "cop.xiao_owt.liao_pdl.xx_cluster.xx_servicegroup.test_service.scribed_job.scribed",
        "cop.xiao_owt.liao_pdl.im_cluster.staging_service.123123_job.123123",
        "cop.xiao_owt.liao_pdl.im_cluster.staging_servicegroup.test_service.scribed_job.scribed",
        "cop.xiao_owt.liao_pdl.im_cluster.staging_service.123_job.123",
        "cop.xiao_owt.liao_pdl.im_cluster.staging_service.123aa_job.123aa",
        "cop.xiao_owt.liao_pdl.im_cluster.staging_servicegroup.test2_service.scribed_job.scribed",
        "cop.xiao_owt.liao_pdl.aa_cluster.staging_job.aa"
];

function buildTree(tags) {
    var tree = {};
    for (var x = 0; x < tags.length; x++) {
        var steps = tags[x].split('_');

        var current = null,
            existing = null,
            i = 0;
        for (var y = 0; y < steps.length; y++) {
            var kv = steps[y].split('.');
            var k = kv[0];
            var v = kv[1];

            if (y === 0) {
                if (!tree.children || typeof tree.children === 'undefined') {
                    tree = {
                        name: v,
                        open: true,
                        type: k,
                        path: steps[y],
                        children: []
                    };
                }
                current = tree.children;
            } else {
                existing = null;
                for (i = 0; i < current.length; i++) {
                    if (current[i].name === v) {
                        existing = current[i];
                        break;
                    }
                }
                if (existing) {
                    current = existing.children;
                } else {
                    current.push({
                        name: v,
                        open: true,
                        path: steps.slice(0, y+1).join('_'),
                        type: k,
                        children: []
                    });
                    current = current[current.length - 1].children;
                }
            }
        }
    }
    return tree;
}

var tree = buildTree(data2);

console.log(JSON.stringify(tree, null, 2));

// console.log(JSON.stringify(tree, null, 2));
