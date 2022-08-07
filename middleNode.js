let Head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
                val:7,
                next:{
                    val:8,
                    next:{
                        val:9,
                        next:null
                    }
                }
            },
          },
        },
      },
    },
  },
};

var middleNode = function (head) {
  var count = 0;
  var mid = head;

  while (head != null) {
    // Update mid, when 'count'
    // is odd number
    if (count % 2 == 1) mid = mid.next;
    console.log(count % 2)
    console.log(count);
    count++;
    console.log(count);
    console.log("----------------------");
    head = head.next;
  }
  return mid;
};
console.log(middleNode(Head));
