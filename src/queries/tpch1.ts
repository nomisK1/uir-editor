export const tpch1 = `const %1342[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1698[72] ="\\012\\000\\000\\000\\007\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\/-)U\\000\\000sf%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1808[28] ="\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\007\\000\\000\\000\\010\\000\\000\\000\\011\\000\\000\\000\\012\\000\\000\\000"

const %17586[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %20522[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_0, i64 72)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_2, %state, global %1342)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load int32 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 4
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_230_1 = load int32 %right
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %right, i64 4
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %Char1_cpp_85_ = cmpult i32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_1
  %Char1_cpp_85_5 = zext i32 %Char1_cpp_85_
  %Char1_cpp_85_6 = cmpult i32 %MaterializationHelper_cpp_230_1, %MaterializationHelper_cpp_230_
  %Char1_cpp_85_7 = zext i32 %Char1_cpp_85_6
  %Char1_cpp_85_8 = sub i32 %Char1_cpp_85_7, %Char1_cpp_85_5
  %Char1_cpp_85_9 = cmpult i32 %MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_3
  %Char1_cpp_85_10 = zext i32 %Char1_cpp_85_9
  %Char1_cpp_85_11 = cmpult i32 %MaterializationHelper_cpp_230_3, %MaterializationHelper_cpp_230_0
  %Char1_cpp_85_12 = zext i32 %Char1_cpp_85_11
  %Char1_cpp_85_13 = sub i32 %Char1_cpp_85_12, %Char1_cpp_85_10
  %SortTranslator_cpp_103_ = cmpeq i32 %Char1_cpp_85_8, 0
  %SortTranslator_cpp_103_14 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_15 = and i32 %Char1_cpp_85_13, %SortTranslator_cpp_103_14
  %SortTranslator_cpp_103_16 = or i32 %Char1_cpp_85_8, %SortTranslator_cpp_103_15
  return %SortTranslator_cpp_103_16
}

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1120)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %1241, int64 %1255)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1476, int8* %1490, int8* %1504)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %1698, i64 1, global %1808, i32 7)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1955, int8* %1969, int64 %1983, object umbra::Relation::RestrictionInfo* %1997, int64 %2011, int32* %2025, int32 %2039)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2125, int32 %2139, int32 %2153, int32 %2167, int32 %2181)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 72)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %2363, int64 %2377)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %2533)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2665, int32 %2679)

define int32 @_10_groupby_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2451059
  condbr %Date_cpp_57_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3145728
  %RelationMappedLogic_cpp_310_7 = load int32 %RelationMappedLogic_cpp_303_6, %localTid
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_310_9 = load int32 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_303_10 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_10, %localTid
  %RelationMappedLogic_cpp_303_11 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_12 = load int64 %RelationMappedLogic_cpp_303_11, %localTid
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_14 = load int64 %RelationMappedLogic_cpp_303_13, %localTid
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %RelationMappedLogic_cpp_309_14 %cont15 %overflow

cont15:
  %BigNumeric_cpp_863_ = ashr i64 %RelationMappedLogic_cpp_309_12, 63
  %BigNumeric_cpp_863_16 = builddata128 d128 %RelationMappedLogic_cpp_309_12 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_17 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_18 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_17
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_16, %BigNumeric_cpp_863_18)
  br %cont19

cont19:
  %Numeric_cpp_763_21 = checkedssub i64 100, %RelationMappedLogic_cpp_309_14 %cont20 %overflow

cont20:
  %BigNumeric_cpp_863_22 = ashr i64 %RelationMappedLogic_cpp_309_12, 63
  %BigNumeric_cpp_863_23 = builddata128 d128 %RelationMappedLogic_cpp_309_12 %BigNumeric_cpp_863_22
  %BigNumeric_cpp_863_24 = ashr i64 %Numeric_cpp_763_21, 63
  %BigNumeric_cpp_863_25 = builddata128 d128 %Numeric_cpp_763_21 %BigNumeric_cpp_863_24
  %Numeric_cpp_698_26 = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_23, %BigNumeric_cpp_863_25)
  %RelationMappedLogic_cpp_303_27 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_309_28 = load int64 %RelationMappedLogic_cpp_303_27, %localTid
  br %cont29

cont29:
  %Numeric_cpp_600_ = checkedsadd i64 100, %RelationMappedLogic_cpp_309_28 %cont30 %overflow

cont30:
  %BigNumeric_cpp_863_31 = ashr i64 %Numeric_cpp_600_, 63
  %BigNumeric_cpp_863_32 = builddata128 d128 %Numeric_cpp_600_ %BigNumeric_cpp_863_31
  %BigNumeric_cpp_630_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%Numeric_cpp_698_26, %BigNumeric_cpp_863_32)
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_310_7
  %Hash_cpp_265_33 = zext i64 %RelationMappedLogic_cpp_310_9
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_33, 32
  %Hash_cpp_269_34 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_34
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_34
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_35 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_36 = mul i64 %Hash_cpp_380_35, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_36, 1023
  %PreaggregationLogic_cpp_20_37 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_37, i32 0, i32 0
  %PreaggregationLogic_cpp_25_38 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_36
  condbr %PreaggregationLogic_cpp_25_38 %then39 %else

then39:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_36)
  store int32 %RelationMappedLogic_cpp_310_7, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int32 %RelationMappedLogic_cpp_310_9, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_207_
  %MaterializationHelper_cpp_983_40 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 8
  store int64 %RelationMappedLogic_cpp_309_12, %MaterializationHelper_cpp_983_40
  %MaterializationHelper_cpp_983_41 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 16
  store data128 %Numeric_cpp_698_, %MaterializationHelper_cpp_983_41
  %MaterializationHelper_cpp_983_42 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 32
  store data128 %BigNumeric_cpp_630_, %MaterializationHelper_cpp_983_42
  %MaterializationHelper_cpp_983_43 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 48
  store int64 i64 1, %MaterializationHelper_cpp_983_43
  %MaterializationHelper_cpp_983_44 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 56
  store int64 %RelationMappedLogic_cpp_309_14, %MaterializationHelper_cpp_983_44
  br %cont70

else:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_37, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_45 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_876_46 = load int32 %MaterializationHelper_cpp_876_45
  %Char1_cpp_75_ = cmpeq i32 %RelationMappedLogic_cpp_310_7, %MaterializationHelper_cpp_876_
  %Char1_cpp_75_47 = cmpeq i32 %RelationMappedLogic_cpp_310_9, %MaterializationHelper_cpp_876_46
  %ConsumerContext_cpp_407_ = and bool %Char1_cpp_75_, %Char1_cpp_75_47
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %then39 %else48

else48:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_309_ %cont49 %overflow

cont49:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_217_
  %MaterializationHelper_cpp_977_50 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  %MaterializationHelper_cpp_977_51 = load int64 %MaterializationHelper_cpp_977_50
  %Numeric_cpp_777_53 = checkedsadd i64 %MaterializationHelper_cpp_977_51, %RelationMappedLogic_cpp_309_12 %cont52 %overflow

cont52:
  %MaterializationHelper_cpp_983_54 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  store int64 %Numeric_cpp_777_53, %MaterializationHelper_cpp_983_54
  %MaterializationHelper_cpp_977_55 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 16
  %MaterializationHelper_cpp_977_56 = load data128 %MaterializationHelper_cpp_977_55
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_56, %Numeric_cpp_698_)
  %MaterializationHelper_cpp_983_57 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_57
  %MaterializationHelper_cpp_977_58 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 32
  %MaterializationHelper_cpp_977_59 = load data128 %MaterializationHelper_cpp_977_58
  %BigNumeric_cpp_688_60 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_59, %BigNumeric_cpp_630_)
  %MaterializationHelper_cpp_983_61 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 32
  store data128 %BigNumeric_cpp_688_60, %MaterializationHelper_cpp_983_61
  %MaterializationHelper_cpp_977_62 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 48
  %MaterializationHelper_cpp_977_63 = load int64 %MaterializationHelper_cpp_977_62
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_63, 1
  %MaterializationHelper_cpp_983_64 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 48
  store int64 %Aggregate_cpp_166_, %MaterializationHelper_cpp_983_64
  %MaterializationHelper_cpp_977_65 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 56
  %MaterializationHelper_cpp_977_66 = load int64 %MaterializationHelper_cpp_977_65
  %Numeric_cpp_777_68 = checkedsadd i64 %MaterializationHelper_cpp_977_66, %RelationMappedLogic_cpp_309_14 %cont67 %overflow

cont67:
  %MaterializationHelper_cpp_983_69 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 56
  store int64 %Numeric_cpp_777_68, %MaterializationHelper_cpp_983_69
  br %cont70

cont70:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %4891, data128 %4905)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %6093, int64 %6107)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %7636, data128 %7650)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %8775)

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %8857, int8* %8871, int64 %8885)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %8976, int8* %8990)

define int32 @_10_groupby_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 4
  %MaterializationHelper_cpp_876_3 = load int32 %MaterializationHelper_cpp_876_2
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_4 = load int32 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 4
  %MaterializationHelper_cpp_876_6 = load int32 %MaterializationHelper_cpp_876_5
  %Char1_cpp_75_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_4
  %Char1_cpp_75_7 = cmpeq i32 %MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_6
  %ConsumerContext_cpp_407_ = and bool %Char1_cpp_75_, %Char1_cpp_75_7
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 24
  %GroupByTranslator_cpp_121_8 = getelementptr int8 %chainEntry, i64 24
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_8
  %MaterializationHelper_cpp_977_9 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_9 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_121_8
  %MaterializationHelper_cpp_977_10 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 8
  %MaterializationHelper_cpp_977_11 = load int64 %MaterializationHelper_cpp_977_10
  %MaterializationHelper_cpp_977_12 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_977_13 = load int64 %MaterializationHelper_cpp_977_12
  %Numeric_cpp_777_15 = checkedsadd i64 %MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_13 %cont14 %overflow

cont14:
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 8
  store int64 %Numeric_cpp_777_15, %MaterializationHelper_cpp_983_
  %MaterializationHelper_cpp_977_16 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 16
  %MaterializationHelper_cpp_977_17 = load data128 %MaterializationHelper_cpp_977_16
  %MaterializationHelper_cpp_977_18 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_977_19 = load data128 %MaterializationHelper_cpp_977_18
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_17, %MaterializationHelper_cpp_977_19)
  %MaterializationHelper_cpp_983_20 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_20
  %MaterializationHelper_cpp_977_21 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 32
  %MaterializationHelper_cpp_977_22 = load data128 %MaterializationHelper_cpp_977_21
  %MaterializationHelper_cpp_977_23 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 32
  %MaterializationHelper_cpp_977_24 = load data128 %MaterializationHelper_cpp_977_23
  %BigNumeric_cpp_688_25 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_22, %MaterializationHelper_cpp_977_24)
  %MaterializationHelper_cpp_983_26 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 32
  store data128 %BigNumeric_cpp_688_25, %MaterializationHelper_cpp_983_26
  %MaterializationHelper_cpp_977_27 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 48
  %MaterializationHelper_cpp_977_28 = load int64 %MaterializationHelper_cpp_977_27
  %MaterializationHelper_cpp_977_29 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 48
  %MaterializationHelper_cpp_977_30 = load int64 %MaterializationHelper_cpp_977_29
  %Aggregate_cpp_175_ = add i64 %MaterializationHelper_cpp_977_28, %MaterializationHelper_cpp_977_30
  %MaterializationHelper_cpp_983_31 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 48
  store int64 %Aggregate_cpp_175_, %MaterializationHelper_cpp_983_31
  %MaterializationHelper_cpp_977_32 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 56
  %MaterializationHelper_cpp_977_33 = load int64 %MaterializationHelper_cpp_977_32
  %MaterializationHelper_cpp_977_34 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 56
  %MaterializationHelper_cpp_977_35 = load int64 %MaterializationHelper_cpp_977_34
  %Numeric_cpp_777_37 = checkedsadd i64 %MaterializationHelper_cpp_977_33, %MaterializationHelper_cpp_977_35 %cont36 %overflow

cont36:
  %MaterializationHelper_cpp_983_38 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 56
  store int64 %Numeric_cpp_777_37, %MaterializationHelper_cpp_983_38
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_39 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_39, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 88
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 8

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %9316)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %13226)

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %13358, int8* %13372)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1342)
  return 0
}

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %13738)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_876_2 = load int32 %MaterializationHelper_cpp_876_1
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_248_
  %MaterializationHelper_cpp_977_3 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 8
  %MaterializationHelper_cpp_977_4 = load int64 %MaterializationHelper_cpp_977_3
  %MaterializationHelper_cpp_977_5 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 16
  %MaterializationHelper_cpp_977_6 = load data128 %MaterializationHelper_cpp_977_5
  %MaterializationHelper_cpp_977_7 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 32
  %MaterializationHelper_cpp_977_8 = load data128 %MaterializationHelper_cpp_977_7
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 48
  %MaterializationHelper_cpp_876_10 = load int64 %MaterializationHelper_cpp_876_9
  %MaterializationHelper_cpp_977_11 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 56
  %MaterializationHelper_cpp_977_12 = load int64 %MaterializationHelper_cpp_977_11
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_977_, 63
  %BigNumeric_cpp_863_13 = builddata128 d128 %MaterializationHelper_cpp_977_ %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_14 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_15 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_14
  %Numeric_cpp_627_ = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_13, %BigNumeric_cpp_863_15, i32 19)
  %BigNumeric_cpp_863_16 = ashr i64 %MaterializationHelper_cpp_977_4, 63
  %BigNumeric_cpp_863_17 = builddata128 d128 %MaterializationHelper_cpp_977_4 %BigNumeric_cpp_863_16
  %BigNumeric_cpp_863_18 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_19 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_18
  %Numeric_cpp_627_20 = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_17, %BigNumeric_cpp_863_19, i32 19)
  %BigNumeric_cpp_863_21 = ashr i64 %MaterializationHelper_cpp_977_12, 63
  %BigNumeric_cpp_863_22 = builddata128 d128 %MaterializationHelper_cpp_977_12 %BigNumeric_cpp_863_21
  %BigNumeric_cpp_863_23 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_24 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_23
  %Numeric_cpp_627_25 = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_22, %BigNumeric_cpp_863_24, i32 19)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 112)
  store int32 %MaterializationHelper_cpp_876_, %SortTranslator_cpp_310_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_310_, i64 4
  store int32 %MaterializationHelper_cpp_876_2, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 8
  store data128 %MaterializationHelper_cpp_977_6, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_26 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store data128 %MaterializationHelper_cpp_977_8, %MaterializationHelper_cpp_150_26
  %MaterializationHelper_cpp_150_27 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store data128 %Numeric_cpp_627_, %MaterializationHelper_cpp_150_27
  %MaterializationHelper_cpp_150_28 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  store data128 %Numeric_cpp_627_20, %MaterializationHelper_cpp_150_28
  %MaterializationHelper_cpp_150_29 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  store data128 %Numeric_cpp_627_25, %MaterializationHelper_cpp_150_29
  %MaterializationHelper_cpp_150_30 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_150_30
  %MaterializationHelper_cpp_150_31 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 88
  store int64 %MaterializationHelper_cpp_977_4, %MaterializationHelper_cpp_150_31
  %MaterializationHelper_cpp_150_32 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 96
  store int64 %MaterializationHelper_cpp_876_10, %MaterializationHelper_cpp_150_32
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 12
}

declare data128 @_ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j(data128 %15297, data128 %15311, int32 %15325)

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %15828, int64 %15842)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %17124, int32 %17138)

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 15
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %17332)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %17414, object umbra::SortOperator* %17428)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %17586)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 24808
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 17)
  return 16
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %17554)

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %17670, int8* %17684, int8* %17698)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %17839, object umbra::SortOperator* %17853)

define int32 @_10_sort_groupby_extra10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %17586, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 17
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %18093, int8* %18107, int8* %18121, int32 %18135)

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 18, i32 19, i32 20)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 21)
  return 22
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %18394, object umbra::SortOperator* %18408, bool %18422)

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load int32 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 4
  %MaterializationHelper_cpp_230_1 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 8
  %MaterializationHelper_cpp_230_2 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_4 = load data128 %MaterializationHelper_cpp_229_3
  %MaterializationHelper_cpp_229_5 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_6 = load data128 %MaterializationHelper_cpp_229_5
  %MaterializationHelper_cpp_229_7 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_229_7
  %MaterializationHelper_cpp_229_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 64
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_229_9
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 80
  %MaterializationHelper_cpp_230_12 = load int64 %MaterializationHelper_cpp_229_11
  %MaterializationHelper_cpp_229_13 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 88
  %MaterializationHelper_cpp_230_14 = load int64 %MaterializationHelper_cpp_229_13
  %MaterializationHelper_cpp_229_15 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 96
  %MaterializationHelper_cpp_230_16 = load int64 %MaterializationHelper_cpp_229_15
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj (ptr 0x55a1d1d8c7c0, i64 648518346341351424, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj (ptr 0x55a1d1d8c7c0, i64 648518346341351424, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_12)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_14)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158684926976, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158903031296, %MaterializationHelper_cpp_230_4)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_6)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_8)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_10)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 360287970189639680, %MaterializationHelper_cpp_230_16)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 21
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %20313, int8 %20327)

declare void @_ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj(object umbra::OutputTarget* %20454, int64 %20468, int32 %20482)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %20544, int32 %20558)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %20656, int64 %20670, int64 %20684)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %20808, int64 %20822, data128 %20836)

declare void @_ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %21132, int64 %21146, int64 %21160)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %21243)

define int32 @_10_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_1)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %21665)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %21748)
`;