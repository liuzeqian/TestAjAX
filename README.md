# ����ԭ��AJAX

ԭ��AJAX�˽��£���Ȼ�����õ���ԭ����ajax��Ҫ���Ĳ���
1. �����첽���� XMLHTmlRequest����
��2.����״̬�ı�ļ������ᴥ��һ���������ú���ͨ������֮Ϊ�ص�����
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // �����ͳɹ�
            if (xhr.status == 200) { // ��ӦҲ�ɹ�
                // �����Ӧ������
                var data = xhr.responseText;
                // ����ҳ�����������д�뵽div��
                document.getElementById("d1").innerHTML = data;
            }
1.         }
����3.���������·��
   xhr.open("GET", "/TestAjax/ServletDemo1", true);
    // 4.��������û�����������дnull
    xhr.send(null);
