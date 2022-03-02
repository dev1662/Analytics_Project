<!DOCTYPE html>
<html lang="en">

<head>
    {{-- <meta charset="UTF-8"> --}}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google-site-verification" content="Vky4ovA12jJoES3mKQZ-KNH2a6Ns-n1ch10wyIB2GLM" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Document</title>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-220932015-1"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-220932015-1');
</script>

</head>

<body>


    <form action="propertyDetails" method="post">

        @csrf
        <input type="hidden" id="token" name="token" value="{{ $realToken }}">
        <select name="account_id" id="account">
            <option value="">Select an Account</option>
            @foreach ($items as $item)
                <option value="{{ $item->id }}">{{ $item->name }}</option>
            @endforeach
        </select>
        <select name="profile_id" id="profile">


        </select>
        <select name="property_id" id="property">


        </select>
        {{-- <div id='properties_dd'></div> --}}
        <button type="submit">Submit</button>
    </form>


</body>
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    $('#account').click(function(e) {
        e.preventDefault();
        var account_id = $('#account').val();
        var token = $('#token').val();

        var html = '';
        var html2 = '';
        var html3 = '';
        var property_id;
        $.ajax({
            type: 'POST',
            url: "{{ route('ajaxRequest.post') }}",
            data: {
                id: account_id,
                token: token
            },
            success: function(data) {
                //   console.log(data);
                var length = Object.keys(data.properties).length;
                //html ='<select name="property_id" id="property"><option value="" id="pp">Select an Account</option>';
                for (let index = 0; index < length; index++) {
                    html += '<option value = ' + data.properties[index].id + '>' + data.properties[
                        index].name + '</option>';
                }
                //html += '</select>';
                $('#property').append(html);
                property_id = $('#property').val();
                console.log(property_id);
                $.ajax({
                    type: 'POST',
                    url: "{{ route('ajaxRequest2.post') }}",
                    data: {
                        account_id: account_id,
                        id: property_id,
                        token: token
                    },
                    success: function(data) {
                        console.log(data);
                        var length2 = Object.keys(data.profiles).length;
                        //html ='<select name="property_id" id="property"><option value="" id="pp">Select an Account</option>';
                        for (let index = 0; index < length2; index++) {
                            html2 += '<option  value  = ' + data.profiles[index].id +
                                '>' + data.profiles[index].name + '</option>';
                        }
                        //html += '</select>';
                        $('#profile').append(html2);
                    }
                })
                $('#property').click(function(e){
                    e.preventDefault();

                    var iddd = [

                    $('#property').val()
                    ];
                    if (property_id != iddd) {

                    console.log(iddd);
                    $.ajax({
                    type: 'POST',
                    url: "{{ route('ajaxRequest2.post') }}",
                    data: {
                        account_id: account_id,
                        id: iddd,
                        token: token
                    },
                    success: function(data) {
                        console.log(data);
                        var length2 = Object.keys(data.profiles).length;
                        //html ='<select name="property_id" id="property"><option value="" id="pp">Select an Account</option>';
                        for (let index = 0; index < length2; index++) {
                            html3 += '<option  value  = ' + data.profiles[index].id +
                                '>' + data.profiles[index].name + '</option>';
                        }
                        //html += '</select>';
                        $('#profile').append(html3);
                    }
                })
                    }
                })
            }
        })



    })
</script>

</html>
